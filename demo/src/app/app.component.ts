import {Component} from '@angular/core';
import {ng1Component} from 'ng-hybrid-decorators';

@ng1Component('demoRoot')
@Component({
  // selector: 'demo-root', // not used since we are using downgraded version
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-hybrid-decorators-demo';

  constructor() {
  }

}
