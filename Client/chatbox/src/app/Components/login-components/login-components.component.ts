import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

@Component({
  selector: 'app-login-components',
  templateUrl: './login-components.component.html',
  styleUrls: ['./login-components.component.css']
})
export class LoginComponentsComponent implements OnInit {
  loginform:any
  constructor(private httpservice: HttpcallsService) {}
  ngOnInit(): void {
    this.loginform=new FormGroup({
      username:new FormControl(null),
      password:new FormControl(null)
    })

  }
  onsubmit(){
    console.log(this.loginform.value)
    let user=this.loginform.value.username;
    let password=this.loginform.value.password;
    let x={
      "Username":user,
      "Password":password
  }
  this.httpservice.login(x);
  }

}
