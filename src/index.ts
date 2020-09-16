import {downgradeComponent, downgradeInjectable} from "@angular/upgrade/static";

export const ng2Services: { key: string, value: Ng2Class }[] = [];
const ng2Components: { key: string, value: Ng2Class }[] = [];
const ng2ClassesToNg1DependenciesToInject: Map<Ng2Class, string[]> = new Map();

type Ng1Module = any;
type Ng2Class = any;
type AngularJsService = any;
type AngularJsInjector = any;

export class NgHybridService {

  loadNg1Dependencies(module: Ng1Module): void {
    NgHybridService.downgradeNg2Components(module);
    NgHybridService.downgradeNg2Services(module);
    NgHybridService.injectNg1ServicesInNg2Classes(module);
  }

  private static injectNg1ServicesInNg2Classes(module: Ng1Module): void {
    module.run(['$injector', function ($injector: AngularJsInjector): void {
      NgHybridService.injectNg1DependenciesInNg2Classes($injector);
    }]);
  }

  private static downgradeNg2Services(module: Ng1Module): void {
    ng2Services.forEach(ng2Service => {
      console.log('downgrading', ng2Service);
      module.factory(ng2Service.key, downgradeInjectable(ng2Service.value));
    });
  }

  private static downgradeNg2Components(module: Ng1Module): void {
    ng2Components.forEach(ng2Component => {
      console.log('downgrading', ng2Component);
      module.directive(ng2Component.key, downgradeComponent({component: ng2Component.value}));
    });
  }

  private static injectNg1DependenciesInNg2Classes($injector: AngularJsInjector): void {
    ng2ClassesToNg1DependenciesToInject.forEach((ng1DependenciesNames: string[], ng2Class: Ng2Class) => {
      ng1DependenciesNames.forEach(ng1DependencyName => {
        const realNg1DependencyName = capitalizeFirstLetter(ng1DependencyName); // unlike in ng2, all services have first capital letter in ng1
        try {
          ng2Class[ng1DependencyName] = $injector.get(realNg1DependencyName);
        } catch (e) {
          console.error(
            `could not inject/instantiate ng1 service [${realNg1DependencyName}] into ng2 class [${ng2Class.constructor.name}]`,
            ng2Class,
            '\nRoot cause:',
            e
          );
          throw e;
        }
      });
    });
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


/**
 * Decorator that makes a service class injectable into angularjs services/controllers/...
 * !!! DO NOT FORGET TO also REGISTER the service in ng2 providers of the module !!!
 * @param name is needed for AOT
 */
export function ng1Service(name: string): ClassDecorator {
  return (target: Ng2Class): Ng2Class => {
    ng2Services.push({key: /*target.name doesn't work with aot atm*/name, value: target});
    return target;
  };
}

/**
 * Decorator that makes a angular component instantiable in an angularjs context
 */
export function ng1Component(directiveName: string): ClassDecorator {
  return (target: Ng2Class): Ng2Class => {
    console.log(target);
    ng2Components.push({key: directiveName, value: target});
    return target;
  };
}

/**
 * Decorator used to inject angularjs dependency into angular component/service
 * (the real injection happens afterwards in Ng1InjectionUtils.injectNg1ServicesInNg2Classes)
 */
export function ng1Inject(): AngularJsService {
  return (ng2Class: Ng2Class, ng1DependencyName: string): void => {
    const previousNg1DependenciesNames = ng2ClassesToNg1DependenciesToInject.get(ng2Class) || [];
    ng2ClassesToNg1DependenciesToInject.set(ng2Class, [ng1DependencyName, ...previousNg1DependenciesNames]);
  };
}
