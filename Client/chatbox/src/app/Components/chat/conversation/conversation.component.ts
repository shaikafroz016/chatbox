import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit,OnChanges{
  @Input() reciver:any;
  sender_id:string='';
  data: any;
  username:any;
  sendform:any;
  constructor(private userservise:CommonService,private httpservice:HttpcallsService){

  }
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['reciver']){
    this.username=this.reciver.name;
    this.getMessages();
   }
  }
  ngOnInit(): void {
    this.sendform = new FormGroup({
      message: new FormControl(null,[Validators.required])
    });
    this.sender_id=this.userservise.getUserId;

    if(this.reciver?.userId){

      this.username=this.reciver?.name;
      this.getMessages();
    }

  }
  getMessages(){

   if(this.reciver?.userId!=''){
    this.httpservice
    .getchats(this.sender_id,this.reciver.userId)
    .subscribe((arg) => {
      this.data = arg
      console.log(this.data)
    });
   }
  }
  onsend(){
   let x= {
      "sender_id": this.sender_id,
      "reciver_id": this.reciver.userId,
      "content": this.sendform.value.message
    }
    if(this.sendform.valid){
      this.httpservice.savemessage(x).subscribe(e=>{
        console.log(e);
        this.sendform.reset()
        this.getMessages();
      })
    }

  }


}
