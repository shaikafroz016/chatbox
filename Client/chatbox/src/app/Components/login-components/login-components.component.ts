import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

@Component({
  selector: 'app-login-components',
  templateUrl: './login-components.component.html',
  styleUrls: ['./login-components.component.css']
})
export class LoginComponentsComponent implements OnInit {
  loginform:any
  error: boolean=false;
  responsemessage: any;
  success: boolean=false;
  constructor(private httpservice: HttpcallsService,private router:Router) {}
  ngOnInit(): void {
    this.loginform=new FormGroup({
      username:new FormControl(null),
      password:new FormControl(null)
    })

  }
  onsubmit(){
    this.error=false;
    this.success=false;
    console.log(this.loginform.value)
    let user=this.loginform.value.username;
    let password=this.loginform.value.password;
    let x={
      "Username":user,
      "Password":password
  }
  this.httpservice.login(x).pipe(catchError(error=>{
    this.error=true;
    this.responsemessage="Username or password is incorrect";
    return throwError(this.responsemessage)
  }))
  .subscribe((e:any)=>{
    this.success=true;
    localStorage.setItem('tocken',JSON.stringify(e))
    this.router.navigateByUrl("/");
  });
  }

}
