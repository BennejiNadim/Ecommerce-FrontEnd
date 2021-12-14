import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl="http://localhost:8082";
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }
  public fetchProducts():Observable<any>
  {
   return this._http.get(baseUrl+"/products/products") ;
  } 
  public addProduct(data:any):Observable<any>
  {
     return this._http.post(baseUrl+"/products/addProduct", data);
 
  }
  public fetchCategories():Observable<any>
  {
    return this._http.get(baseUrl+"/products/categories");
  }
  public deleteProduct(id):Observable<any>
  {
    return this._http.put(baseUrl+"/admin/deleteProduct?prodId="+id,null);
  }
  public categories():Observable<any>
  {
    return this._http.get(baseUrl+"/products/categories");
  }
}
