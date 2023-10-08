import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  baseURL:string =`https://ecommerce.routemisr.com/api/v1/` ;

 cartNumber:BehaviorSubject<number> =new BehaviorSubject(0);

ourToken:any={
  token:localStorage.getItem('ltoken')
}
  addToCart(cartId:string):Observable<any>{
return this._HttpClient.post(this.baseURL + `cart` ,
{
  productId:cartId
},
{
  headers:this.ourToken
}
)
  }


  getUserCart():Observable<any>{
    return this._HttpClient.get(this.baseURL+`cart` , {
headers:this.ourToken

    }

    )

  }

  removeCartItem(cartId:string):Observable<any>{
    return this._HttpClient.delete(this.baseURL+`cart/${cartId}` , {
headers:this.ourToken

    }

    );

  }


  cartCountChange(cartId:string , countNum:number):Observable<any>{
    return this._HttpClient.put(this.baseURL + `cart/${cartId}` ,
    {
      count:countNum
    },
    {
      headers:this.ourToken
    }

    );

  }


  clearCart():Observable<any>{
    return this._HttpClient.delete(this.baseURL+`cart` ,
    {

headers:this.ourToken

    }

    );

  }

  checkOut(cartId:string|null , orderInfo:object):Observable<any>{
    return this._HttpClient.post(this.baseURL+ `orders/checkout-session/${cartId}?url=http://localhost:4200` ,
{

    shippingAddress:orderInfo

},
{
  headers:this.ourToken
}
    );

  }

}
