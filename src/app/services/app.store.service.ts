import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AppStore {

    private _appStore: Map<string, any> = new Map<string, any>();

    public getValue<T = any>(key: string) : T {
       return this._appStore.get(key);
    }

    public addValue(key: string, value: any) :void {
        this._appStore.set(key, value);
    }
}