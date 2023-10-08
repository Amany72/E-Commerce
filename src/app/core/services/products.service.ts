import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private _HttpClient:HttpClient) { }
  baseURL:string = `https://ecommerce.routemisr.com/api/v1/`;



getProducts(numOfPage:number=1):Observable<any>{

  return this._HttpClient.get(this.baseURL + `products?page=${numOfPage}`);
}


getCategories():Observable<any>{

  return this._HttpClient.get(this.baseURL +'categories');
}

getProductDetails(id:string|null):Observable<any>{

  return this._HttpClient.get(this.baseURL + `products/${id}`);
}


}
