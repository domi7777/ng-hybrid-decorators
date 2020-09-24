# ng-hybrid-decorators
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/domi7777/ng-hybrid-decorators/CI)](https://github.com/domi7777/ng-hybrid-decorators/actions?query=workflow%3ACI)
[![npm](https://img.shields.io/npm/v/ng-hybrid-decorators)](https://www.npmjs.com/package/ng-hybrid-decorators)
[![npm bundle size](https://img.shields.io/bundlephobia/min/ng-hybrid-decorators)](https://bundlephobia.com/result?p=ng-hybrid-decorators)
[![StackBlitz](https://img.shields.io/badge/StackBlitz-Edit-blue?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABECAYAAAD+1gcLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AINBw4X0bTGRQAABSxJREFUaN7VmVtsFFUYx//fmQW79bbd2QKpaIIaDcGoifFBEgMGqTTRRA01SgxE5Rbi7QG6S3lgo9J2twpeotxEQlCigLdoQwJ4ARN9QB9MRCNRDBdRzE7LJbTSmTl/H4BYStmd2Z3tDOdt5lzml/9833fO9x0gYi2xgom6Tt5aapyKEnRDlrVGPzfGT+G3SwZ87HLGT8f5uYD7jmSl99IAX80RfTY3A5wMqDVepoQPnqVKHtMbAN4PyJeFtPwafXBSknG9UoDHAIDQq7xODRU8mdc5Aeaeffy7O2F8GnnwZM5dKsCic88CrMU8sSMNbubdZwTIDnjlOoZa52eNYQc3c84sEK+d/1a6ji2UA5EFN3POw4C8fcYy/m+a3p1y2MGTOXsqIJsAxAZ1Hei53tgeSfBkBycK1McALrswJGIVHhE3cuD1ed4uorsAXD5Ed7/hqvXlrFtV8LpO3qKpdwJIDLn/AB/+s0SORgp8VJ43KK23AzAvNsagWlXu+lKV6LGc14itvyEwrsiwX6wWNQEijITiY9pYD1vvKAENAG+VC40hQlNlNt3Bq22lt4EYX2Jor6PVe5V8KzDFG7KsFXE/A3GHB/vcdHyx9IQPnuXI/ji3CuRuT+N1+U4ZHPhmGqk43yXY5C0ccE9hsfwQLjgp5n69hmCz9ylYGcRPrgg8ldfLIXjSx5RjNX3GB6GCm3m3ncDz/v4QNnjJ4KsGbubdVhAZ35YFtTaoKOY7jps5dwGIZf73aH7dnZa9QYH72vLNDmcmRNaX86eEnGvT2BoIdA0o3pV2HgRkS9C7bXnRDGlPypmd9r2AvB8FaAFetDJGvqTiyU7eJWeOp1cgfOo3rRbj6ZJRJdHB20TrrkhAAxutXvVsSedMtfEmGno3gNHhM8snVp80IytO0The18HraOgdkYCm7KyLy6MDoYdUfNQyjnZjeheAm8NXmt/FlDH16CI5dUHaN/DhypeZUqK/AkomAsMQ8fCjq41GKy0nim75ydd51UjX3QZgQgQccV/MUfcVSzYM4Mw1hnPa7QJkYgSgD2qqe6xWOVL8kLWaI3ptbgFkUgSgjwpUY09GDpY8ZJnH9UsExhPYH8CuVgtgTJlzC5pqipXxdpUSaF3FzLkdANJleOIJETWlkJbvh78glOVIM64PARjlc2afiGoqtMiuUMoTqRp3ehnQtpDNfqEDBdeC+T6nuELOLGRiXVVPJC5u2xwP6L0+1qOQ8wqZWNmpXECK6wV+RBCipRLoQBRvyLL2dFwfBlDnTWos7W4xXgi3IATg31p3hldoEG8EAR0IuEC8OuUGK62eCyoYVARutvNOL9VZQD6yxqmnKqmHB6u46PkejHp7XVxmlHOzVhXnTKxgwujXhzH0bdo56m9jymgcKhEITXFl61lFoYV7BMa0akCjkjqJEHOKdP/U7xhNJ1vlZLXOv2Upnmq3JxfJlH4XRzWebBWrmgf38hRXav5F4vSfjqGmHl8if1W/NuSzjWljvW3oQxh0Ly9AQRtqUvdC+Xk4UiXfpmLH9JzB0CBOQKtpwwXtHzxLJcTsQW97FdQDQVxIVc3GUzVuEyEDb4z7NTndysju4c6qfSlOOc8pXQof78nEtoVRDvDsnMlXeK04+o+ztRgSnNOdjq1DSM2z4uLoeecKSCQWhgntXfEsY2ZcHwDQAMESq8VoC7ty5EnxZK37EIAGAV6NArT3c3def2Hm3HdASlSYSipe384bAR6x+tTsIBOBqoMTzlirVz2BrOgoWcF/mizikfkwKiQAAAAASUVORK5CYII=)](https://stackblitz.com/edit/ng-hybrid-decorators-demo)

Some **Typescript decorators** to ease maintenance/evolution of **angularjs/Angular(>5)** hybrid applications
by removing a lot of boilerplate code:

- `@ng1Service()`: Makes an Angular service injectable in angularjs services/components

- `@ng1Inject()`: Injects an angularjs service in Angular sevice/component

- `@ng1Component()`: Makes an Angular component usable in angularjs templates

This micro library (5kb) is based on [official recommendation](https://angular.io/guide/upgrade).

Compatible with AOT and Ivy, tested with Angular 6/7/9/10 (although it might work with others)

See some examples below or the [online demo](https://domi7777.github.io/ng-hybrid-decorators/demo/dist/ng-hybrid-decorators-demo/)
or [fork it on stackblitz](https://stackblitz.com/edit/ng-hybrid-decorators-demo)

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
or fork it on [stackblitz](https://stackblitz.com/edit/ng-hybrid-decorators-demo)

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
