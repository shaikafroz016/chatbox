import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpcallsService {
  url:string='https://localhost:7066/api/'

  constructor(private http:HttpClient) { }

  getchats(sender_id:string,reciver_id:string){

    return this.http.get(this.url+`Chat/getMessages?sender_id=${sender_id}&reciver_id=${reciver_id}`);
  }
  login(data:any){

    return this.http.post(this.url+`auth/login`,data)
  }
  signup(data:any){
    return this.http.post(this.url+`auth/register`,data)
  }
  getUsers(){
    return this.http.get(this.url+'auth/Users')
  }
}
