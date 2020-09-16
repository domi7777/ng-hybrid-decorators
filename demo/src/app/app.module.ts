import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {getAngularJSGlobal, UpgradeModule} from "@angular/upgrade/static";
import {NgHybridService} from "ng-hybrid-decorators";
import {BirdModule} from "./bird/bird.module";
import {CatModule} from "./cat/cat.module";
import {DogModule} from "./dog/dog.module";
import {ElephantModule} from "./elephant/elephant.module";
import {FrogModule} from "./frog/frog.module";
import {GiraffeModule} from "./giraffe/giraffe.module";

/**
 * webpack require to load angularjs files
 */
declare const require: any;
/**
 * angularjs that's on window object
 * added in scripts in angular.json
 */
const angular = getAngularJSGlobal();

// do NOT make following line dynamic as it is evaluated by webpack before page is loaded
const jsFiles = require.context(`.`, true/*recursive*/, /^((?!\.spec).)*\.js$/);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    // demo modules
    BirdModule,
    CatModule,
    DogModule,
    ElephantModule,
    FrogModule,
    GiraffeModule
  ],
  entryComponents: [],
  providers: [NgHybridService],
})
export class AppModule {

  constructor(private upgradeModule: UpgradeModule, private ngHybridService: NgHybridService) {
  }

  // noinspection JSUnusedGlobalSymbols
  public ngDoBootstrap(): void {
    const angularJsModule = angular.module('demo.app', []);
    jsFiles.keys().forEach((jsFileName: string) => {
      console.log(`requiring js file :${jsFileName}`)
      jsFiles(jsFileName);
    });

    this.ngHybridService.loadNg1Dependencies(angularJsModule);

    angularJsModule.run(function () {
      console.warn('angularjs module loaded');
    });
    this.upgradeModule.bootstrap(document.body, ['demo.app'], {strictDi: true});
  }

}
