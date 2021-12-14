import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  public registerUser(data:any):Observable<any>{
    return this._http.post("http://localhost:8082/registerApi/Signup",data);
  }
}
