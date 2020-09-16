# ng-hybrid-decorators

A few decorators to ease maintenance/evolution of **angularjs/Angular** hybrid applications:

- `@ng1Service()`: Makes an Angular service injectable in angularjs services/components

- `@ng1Inject()`: Injects an angularjs service in Angular sevice/component

- `@ng1Component()`: Makes an Angular component usable in angularjs templates


See some examples below:

## @ng1Service()
#### Angular service downgraded to angularjs:
```typescript
@Injectable() // does NOT work with provideIn: 'root', it needs to be put in providers of a module
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

#### It can be used in angularjs template:
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

To see these examples work realtime feel free to checkout the demo:

```shell script
git clone ...
cd ./...
npm i
npm run update-demo
npm run demo
```

# Setup
To be able to use the decorators, a small setup is needed where the hybrid app is configured:
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
