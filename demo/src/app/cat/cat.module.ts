import {NgModule} from '@angular/core';
import {CatComponent} from './cat.component';
import {NewCatService} from './new-cat.service';

@NgModule({
  declarations: [
    CatComponent
  ],
  exports: [
    CatComponent
  ],
  providers: [
    NewCatService
  ]
})
export class CatModule {

}
