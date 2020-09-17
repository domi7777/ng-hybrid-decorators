import {Injectable} from "@angular/core";
import {ng1Service} from 'ng-hybrid-decorators';

@Injectable() // does NOT work with provideIn: 'root', it needs to be put in providers of a module
@ng1Service('DogService')
export class DogService {

  getSound(): string {
    return "Bark bark bark";
  }

}
