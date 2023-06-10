import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username:string=''
constructor(private userservice:CommonService,private route:Router){

}
  ngOnInit(): void {
    this.username=this.userservice.getUserName;
  }
logout(){
  localStorage.removeItem('tocken');
 this.route.navigateByUrl('/login')
}
}
