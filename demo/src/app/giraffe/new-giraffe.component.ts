import {Component, Input} from '@angular/core';
import {ng1Component} from "ng-hybrid-decorators";

@ng1Component('newGiraffe')
@Component({
  selector: 'new-giraffe',
  templateUrl: './new-giraffe.component.html',
})
export class NewGiraffeComponent {

  @Input() sound!: string;
}
