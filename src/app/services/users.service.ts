import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const baseUrl="https://shielded-lake-71432.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  public fetchUsers():Observable<any>
  {
   return this._http.get(baseUrl+"/registerApi/users") ;
  } 
}
