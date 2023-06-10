import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcheckService {

  constructor() { }
  isAuthenticated(){
    let token=localStorage.getItem('tocken');
  let tokendata;
  if(token){
    tokendata=JSON.parse(token);
  }
    if(tokendata==null || tokendata==undefined ||new Date(tokendata.expiration)<new Date()){

      return true;
    }
    return false;
  }
}
