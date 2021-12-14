import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  public fetchUsers():Observable<any>
  {
   return this._http.get("http://localhost:8082/registerApi/users") ;
  } 
}
