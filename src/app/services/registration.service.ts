import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
const baseUrl="https://shielded-lake-71432.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  public registerUser(data:any):Observable<any>{
    return this._http.post(baseUrl+"/registerApi/Signup",data);
  }
}
