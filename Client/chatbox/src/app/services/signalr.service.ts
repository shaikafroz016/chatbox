import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
private hubConnection:HubConnection | undefined;
private mesagerecivedSubject:Subject<any>=new Subject<any>();
  constructor() {
    this.hubConnection=new HubConnectionBuilder()
    .withUrl('https://localhost:7066/signalhub')
    .build();
    this.hubConnection.start().catch(err=>{
      console.log(err);
    });
    this.hubConnection.on('ReciveChat',data=>{
      this.mesagerecivedSubject.next({data})
    })
  }
}
