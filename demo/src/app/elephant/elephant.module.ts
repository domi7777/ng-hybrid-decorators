import {NgModule} from '@angular/core';
import {ElephantService} from "./elephant.service";
import {ElephantComponent} from "./js/elephant.component";


@NgModule({
  declarations: [
    ElephantComponent
  ],
  exports: [
    ElephantComponent
  ],
  providers: [
    ElephantService
  ]
})
export class ElephantModule {

}
