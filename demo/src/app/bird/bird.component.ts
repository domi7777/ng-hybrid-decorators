import {Component} from '@angular/core';
import {ng1Inject} from 'ng-hybrid-decorators';

@Component({
  selector: 'demo-bird',
  templateUrl: './bird.component.html',
})
export class BirdComponent {
  @ng1Inject() private birdService: any;

  getSound(): string {
    return this.birdService.getSound();
  }

}
