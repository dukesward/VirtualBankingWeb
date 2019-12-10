import { Injectable } from '@angular/core';

declare var require: any;
@Injectable({
    providedIn: 'root'
})

export class AppConfig {
   
    private _appConfig :any;

    constructor(){
        this.init();
    }

    public init(){
        const appConfigObj = require('../config/app-config.js')
        this._appConfig = appConfigObj.appconfig;
        console.log("appConfig: ",this._appConfig)
    }

    public getApiConfig(): any{
        return this._appConfig['api'];
    }
    public getProxy(): any{
        return this._appConfig['proxy']
    }
}