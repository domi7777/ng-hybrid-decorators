import {Directive, ElementRef, Inject, Injector} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";

@Directive({selector: 'dog'})
// tslint:disable-next-line:directive-class-suffix
export class DogComponent extends UpgradeComponent {

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('dog', elementRef, injector);
  }
}
