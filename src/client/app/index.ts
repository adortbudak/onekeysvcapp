/**
 * Created by adortbud on 8/19/2016.
 */
///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {Component}  from 'angular2/core';

@Component({
    selector: 'app',
    templateUrl: './main.html'
})

export class App{

    constructor(){

    }


}

bootstrap(App);
