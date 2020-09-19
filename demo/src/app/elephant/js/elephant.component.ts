import {Directive, ElementRef, Inject, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

// tslint:disable-next-line:directive-selector
@Directive({selector: 'demo-elephant'})
// tslint:disable-next-line:directive-class-suffix
export class ElephantComponent extends UpgradeComponent {

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('demoElephant', elementRef, injector);
  }
}
