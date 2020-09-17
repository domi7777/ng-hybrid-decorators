import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {BirdModule} from './bird/bird.module';
import {CatModule} from './cat/cat.module';
import {DogModule} from './dog/dog.module';
import {ElephantModule} from './elephant/elephant.module';
import {FrogModule} from './frog/frog.module';
import {GiraffeModule} from './giraffe/giraffe.module';
import {NgHybridService} from "ng-hybrid-decorators";
import {NewGiraffeComponent} from "./giraffe/new-giraffe.component";

/**
 * webpack require to load angularjs files
 */
declare const require: any;
/**
 * angularjs that's on window object
 * added in scripts in angular.json
 */
declare const angular: any;

// This is a way of including angularjs files with webpack
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
    providers: [NgHybridService],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {

    constructor(private upgradeModule: UpgradeModule, private ngHybridService: NgHybridService) {
    }

    // noinspection JSUnusedGlobalSymbols
    public ngDoBootstrap(): void {
        const debug = true;
        const angularJsModule = angular.module('demo.app', []);

        // include js files with webpack
        jsFiles.keys().forEach((jsFileName: string) => {
            if (debug) {
                console.log(`requiring js file :${jsFileName}`);
            }
            jsFiles(jsFileName);
        });

        this.ngHybridService.loadNg1Dependencies(angularJsModule, {
            debug,
            // workaround for ivy, see https://github.com/angular/angular/issues/37102
            // not needed when enableIvy: false
            downgradedComponentsForIvy: [
                AppComponent,
                NewGiraffeComponent
            ]
        });

        angularJsModule.run(() => {
            console.warn('angularjs module loaded');
        });
        this.upgradeModule.bootstrap(document.body, ['demo.app'], {strictDi: true});
    }

}
