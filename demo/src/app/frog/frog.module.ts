import {NgModule} from '@angular/core';
import {OldFrogComponent} from "./js/old-frog.component";
import {FrogComponent} from "./frog.component";

@NgModule({
  declarations: [
    OldFrogComponent,
    FrogComponent
  ],
  exports: [
    FrogComponent
  ],
  providers: []
})
export class FrogModule {

}
