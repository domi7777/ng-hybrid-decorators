import {NgModule} from '@angular/core';
import {DogService} from './dog.service';
import {DogComponent} from './js/dog.component';

@NgModule({
  declarations: [
    DogComponent
  ],
  exports: [
    DogComponent
  ],
  providers: [
    DogService
  ]
})
export class DogModule {

}
