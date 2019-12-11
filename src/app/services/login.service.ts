import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  userLogin(username , password): Observable<Object>{
    const requestBody ={
      username: username,
      password: password

    }
    console.log(requestBody)
   return this.httpClient.post("http://18.216.128.62:8081/private/v1/customer/login",requestBody)
   
  }
}
