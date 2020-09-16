import {NgModule} from '@angular/core';
import {GiraffeComponent} from "./js/giraffe.component";
import {NewGiraffeComponent} from "./new-giraffe.component";

@NgModule({
  declarations: [
    GiraffeComponent,
    NewGiraffeComponent
  ],
  exports: [
    GiraffeComponent
  ],
  providers: []
})
export class GiraffeModule {

}
