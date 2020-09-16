import {Component} from '@angular/core';
import {ng1Inject} from "ng-hybrid-decorators";

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
})
export class CatComponent {
  @ng1Inject() private catService: any;

  getSound(): string {
    return this.catService.getSound();
  }

}
