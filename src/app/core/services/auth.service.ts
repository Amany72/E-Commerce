import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
userInfo:any;
  baseURL:string=`https://ecommerce.routemisr.com/api/v1/auth/`;


  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseURL + 'SignUp '  , userData)
  }


  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseURL + 'SignIn '  , userData)
  }

decodeUser():void{
const encode = localStorage.getItem('ltoken');
if(encode !== null){
  const decode = jwtDecode(encode);
  this.userInfo=decode;
}

}


}



