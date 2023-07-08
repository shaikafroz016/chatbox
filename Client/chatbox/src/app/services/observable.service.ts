import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
  public callContactList=new BehaviorSubject<any>(null);

  sendCallContactValue(flagvalue: any){
    this.callContactList.next(flagvalue);
  }
  reciveCallContactValue():Observable<any>{
    return this.callContactList.asObservable();
  }
}
