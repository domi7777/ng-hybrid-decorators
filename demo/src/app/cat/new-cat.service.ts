import {Injectable} from "@angular/core";
import {ng1Service} from "ng-hybrid-decorators";

@Injectable() // does NOT work with provideIn: 'root', it needs to be put in providers of a module
@ng1Service('NewCatService')
export class NewCatService {

  getNewSound(): string {
    console.warn('NewCatService.getNewSound is called');
    return "Meow meow meow";
  }

}
