import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  public loginUser(data:any):Observable<any>
  {
   return this._http.post("http://localhost:8082/login",data,{observe: 'response'}) ;

  } 

  public isAuthenticated(): boolean {
    const token =  localStorage.getItem('token');
    if (token===undefined || token===null) {
        return  false;
    }
    return true;
}

isUserLoggedIn() {
  let user = sessionStorage.getItem("token");
  console.log(!(user === null));
  return !(user === null);
}

logOut() {
  localStorage.removeItem("token");
}
}
