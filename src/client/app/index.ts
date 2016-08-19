/**
 * Created by adortbud on 8/19/2016.
 */
///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {Component}  from 'angular2/core';

@Component({
    selector: 'app',
    template: `        
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    Left Column
                </div>
                <div class="col-lg-10">
                    Righ Column
                </div>
            </div>
        </div>
    `
})

export class App{

    constructor(){

    }


}

bootstrap(App);
