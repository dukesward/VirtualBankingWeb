import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig} from './app.config.service'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppController {
    
    constructor(
        private httpclient: HttpClient,
        private appConfig: AppConfig

    ){
       // console.log(this.initUrl("app_module","authentication")['uri'])
    }


    initUrl(moduleName: string, functionName: string){
       return this.appConfig.getApiConfig()[moduleName][functionName]
    }

    post(moduleName: string, functionName: string, requestBody :any,options? :any):Observable<any>{
        const urlConfig =this.initUrl(moduleName,functionName);
        const uri = urlConfig['uri'];
      
        const proxy = urlConfig['proxy'];
        
       return this.httpclient.post(proxy+uri,requestBody,options);

    }

    get(moduleName: string, functionName: string, requestParameter?:HttpParams,requestHeader? :HttpHeaders, args? :Array<string>):Observable<any>{
        const urlConfig =this.initUrl(moduleName,functionName);
        var uri = urlConfig['uri'];
        
        const proxy = urlConfig['proxy'];
        if(args){
            args.forEach(element => {
                uri=  uri.replace(/{\w+}/,element)
            });
        }
        var options ={
            headers: requestHeader,
            params: requestParameter
        }
       return this.httpclient.get(proxy+uri,options);

    }

    put(moduleName: string, functionName: string, requestBody :any,options? :any):Observable<any>{
        const urlConfig =this.initUrl(moduleName,functionName);
        const uri = urlConfig['uri'];
      
        const proxy = urlConfig['proxy'];
        
       return this.httpclient.put(proxy+uri,requestBody,options);

    }

    delete(moduleName: string, functionName: string, requestParameter :any,options? :any):Observable<any>{
        const urlConfig =this.initUrl(moduleName,functionName);
        const uri = urlConfig['uri'];
      
        const proxy = urlConfig['proxy'];
        
       return this.httpclient.delete(proxy+uri,options);

    }

}