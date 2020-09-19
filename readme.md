# ng-hybrid-decorators

![GitHub package.json version](https://img.shields.io/github/package-json/v/domi7777/ng-hybrid-decorators)

Some **Typescript decorators** to ease maintenance/evolution of **angularjs/Angular(2+)** hybrid applications
by removing a lot of boilerplate code:

- `@ng1Service()`: Makes an Angular service injectable in angularjs services/components

- `@ng1Inject()`: Injects an angularjs service in Angular sevice/component

- `@ng1Component()`: Makes an Angular component usable in angularjs templates

This micro library (5kb) is based on [official recommendation](https://angular.io/guide/upgrade).

See some examples below or the [online demo](https://domi7777.github.io/ng-hybrid-decorators/demo/dist/ng-hybrid-decorators-demo/)

## @ng1Service()
#### Angular service downgraded to angularjs:
```typescript
@Injectable()
@ng1Service('NewCatService')
export class NewCatService {

  getNewSound(): string {
    return "Meow meow meow";
  }

}
```

#### angularjs controller/service can now inject it:
```javascript
angular
  .module('demo.app')
  .factory('CatService', CatService);

function CatService(NewCatService) {

  var service = {
    getSound: getSound,
  }

  return service;

  function getSound() {
    return NewCatService.getNewSound();
  }

}

```

## @ng1Inject()
#### Considering an angularjs service:
```javascript
angular
  .module('demo.app')
  .factory('OldElephantService', function() {

    var service = {
      getSound: getSound,
    }

    return service;

    function getSound() {
      return 'Pwoa pwoa pwoaaa';
    }
  
});
```
#### It is easily injected in Angular services/components:
```typescript
@Injectable()
export class ElephantService {

  @ng1Inject() oldElephantService: any;

  getSound(): string {
    return this.oldElephantService.getSound();
  }

}
```

## @ng1Component()
#### Angular component downgraded to angularjs:
```typescript
@ng1Component('newGiraffe')
@Component({
  selector: 'new-giraffe',
  templateUrl: './new-giraffe.component.html',
})
export class NewGiraffeComponent {

  @Input() sound!: string;
}
```

#### Angular component can then be used in angularjs template:
```javascript
angular
    .module('demo.app')
    .directive('giraffe', giraffe);

  function giraffe() {
    var directive = {
      restrict: 'E',
      template: `<new-giraffe [sound]="'Bleat bleat bleat'"></new-giraffe>`,
      controller: 'GiraffeController',
      controllerAs: 'GiraffeCtrl',
    };
    return directive;
  }
```

See also the [online demo](https://domi7777.github.io/ng-hybrid-decorators/demo/dist/ng-hybrid-decorators-demo/)

## Installation
```shell script
npm i ng-hybrid-decorators
```

## Setup
`NgHybridService` needs to be called where the hybrid app is configured:
```typescript
export class AppModule {

  constructor(private upgradeModule: UpgradeModule, private ngHybridService: NgHybridService) {
  }

  // noinspection JSUnusedGlobalSymbols
  public ngDoBootstrap(): void {
    const angularJsModule = angular.module('demo.app', []);

    this.ngHybridService.loadNg1Dependencies(angularJsModule);

    this.upgradeModule.bootstrap(document.body, ['demo.app'], {strictDi: true});
  }

}
```

See [demo source code](./demo/src/app/app.module.ts)

## Run demo locally

```shell script
git clone https://github.com/domi7777/ng-hybrid-decorators.git
cd ng-hybrid-decorators
npm i
npm run update-demo
npm run demo
```
