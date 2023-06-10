import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcheckService } from 'src/app/services/authcheck.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  reciver:string='';
  AllUsers:any

constructor(private router:Router,private authservice:AuthcheckService,private httpservice:HttpcallsService){

}
  ngOnInit(): void {
    this.validatesession()
    this.getUsers();
  }
  validatesession(){
    if(this.authservice.isAuthenticated()){

      this.router.navigateByUrl("/login")
    }

  }

  selected(data:any){
    this.reciver=data
  }
  getUsers(){
    this.httpservice.getUsers().subscribe((e:any)=>{
      this.AllUsers=e;
    })
  }

}
