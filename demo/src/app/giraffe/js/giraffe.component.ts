import {Directive, ElementRef, Inject, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

// tslint:disable-next-line:directive-selector
@Directive({selector: 'demo-giraffe'})
// tslint:disable-next-line:directive-class-suffix
export class GiraffeComponent extends UpgradeComponent {

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('demoGiraffe', elementRef, injector);
  }
}
