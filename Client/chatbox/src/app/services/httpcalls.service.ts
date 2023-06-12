import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpcallsService {
  private hubConnection:HubConnection | undefined;
private mesagerecivedSubject:Subject<any>=new Subject<any>();
  url:string='https://localhost:7066/api/'

  constructor(private http:HttpClient) {
    this.hubConnection=new HubConnectionBuilder()
    .withUrl('https://localhost:7066/signalhub')
    .build();
    this.hubConnection.start().catch(err=>{
      console.log(err);
    });
    this.hubConnection.on('ReciveChat',(data)=>{
      this.mesagerecivedSubject.next(data);
    })
  }

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
  return firstValueFrom( this.http.get(this.url+'auth/Users')).then(res=>{
    return res
  });
  }
  savemessage(data:any){
    let x= this.http.post(this.url+`Chat/saveMessages`,data)
    this.hubConnection?.invoke('ReciveChat',(data));
    return x;
  }
  public onMessageRecived():Subject<any>{
    console.log(this.mesagerecivedSubject);
    return this.mesagerecivedSubject;
  }

  getcontacts(sender_id:string){
    return firstValueFrom( this.http.get(this.url+`Chat/getcontacts?sender_id=${sender_id}`)).then(res=>{
      return res
    });
  }
}
