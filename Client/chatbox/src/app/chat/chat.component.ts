import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
constructor(private router:Router){

}
  ngOnInit(): void {
    let token=localStorage.getItem('tocken');
  let tokendata;
  if(token){
    tokendata=JSON.parse(token);
  }
    if(tokendata==null || tokendata==undefined ||new Date(tokendata.expiration)<new Date()){

      this.router.navigateByUrl("/login")
    }

  }

}
