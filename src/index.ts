import {downgradeComponent, downgradeInjectable} from '@angular/upgrade/static';

export const ng2Services: { key: string, value: Ng2Class }[] = [];
const ng2Components: { key: string, value: Ng2Class }[] = [];
const ng2ClassesToNg1DependenciesToInject: Map<Ng2Class, string[]> = new Map();

type Ng1Module = any;
type Ng2Class = any;
type AngularJsService = any;
type AngularJsInjector = any;

interface Options {
  debug?: boolean;
  // workaround for ivy, see https://github.com/angular/angular/issues/37102
  // not needed when enableIvy: false
  downgradedComponentsForIvy?: Ng2Class[];
}

export class NgHybridService {
  private options: Options;

  /**
   * @param module angularjs module
   * @param options debug & ivy compatibility (see https://github.com/angular/angular/issues/37102) options
   */
  loadNg1Dependencies(module: Ng1Module, options: Options = {debug: false, downgradedComponentsForIvy: []}): void {
    this.options = {...options, downgradedComponentsForIvy: options.downgradedComponentsForIvy || []};
    this.downgradeNg2Components(module);
    this.downgradeNg2Services(module);
    this.injectNg1ServicesInNg2Classes(module);
  }

  private injectNg1ServicesInNg2Classes(module: Ng1Module): void {
    module.run(['$injector', ($injector: AngularJsInjector) => {
      this.injectNg1DependenciesInNg2Classes($injector);
    }]);
  }

  private downgradeNg2Services(module: Ng1Module): void {
    ng2Services.forEach(ng2Service => {
      if (this.options.debug) {
        console.log('downgrading', ng2Service);
      }
      module.factory(ng2Service.key, downgradeInjectable(ng2Service.value));
    });
  }

  private downgradeNg2Components(module: Ng1Module): void {
    ng2Components.forEach(ng2Component => {
      if (this.options.debug) {
        console.log('downgrading', ng2Component);
        if (!this.options.downgradedComponentsForIvy.includes(ng2Component.value)) {
          console.warn(
              `Class decorated with @ng1Component('${ng2Component.key}') is not in downgradedComponentsForIvy!` +
              `\nIf 'enableIvy' is true this component will not be included in production build!`
          );
        }
      }
      module.directive(ng2Component.key, downgradeComponent({component: ng2Component.value}));
    });
  }

  private injectNg1DependenciesInNg2Classes($injector: AngularJsInjector): void {
    ng2ClassesToNg1DependenciesToInject.forEach((ng1DependenciesNames: string[], ng2Class: Ng2Class) => {
      ng1DependenciesNames.forEach(ng1DependencyName => {
        // unlike in ng2, all services have first capital letter in ng1
        const realNg1DependencyName = capitalizeFirstLetter(ng1DependencyName);
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

function capitalizeFirstLetter(someString: string): string {
  return someString.charAt(0).toUpperCase() + someString.slice(1);
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
