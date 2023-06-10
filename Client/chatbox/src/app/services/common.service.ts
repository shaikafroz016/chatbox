import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    let token=localStorage.getItem('tocken');

  if(token){
    this.tokenData=JSON.parse(token);
  }
  }

  userName:string=''
  userId:string=''
  tokenData:any
  setuserName(username:string){
    this.userName=username;
  }
  get getUserName(){
    if(this.userName==''){
      this.userName=this.tokenData.userName;
    }
    return this.userName;
  }

  setUserId(user_id:string){
    this.userId=user_id
  }

  get getUserId(){
    if(this.userId==''){
      this.userId=this.tokenData.userId;
    }
    return this.userId;
  }
}
