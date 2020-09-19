import {Injectable} from '@angular/core';
import {ng1Inject, ng1Service} from 'ng-hybrid-decorators';

@Injectable() // does NOT work with provideIn: 'root', it needs to be put in providers of a module
@ng1Service('ElephantService')
export class ElephantService {

  @ng1Inject() oldElephantService: any; // injects OldElephantService

  getSound(): string {
    return this.oldElephantService.getSound();
  }

}
