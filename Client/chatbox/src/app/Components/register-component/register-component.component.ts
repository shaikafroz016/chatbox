import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit{
signupform: any;
errmsg:string=''
success: boolean=false;
  responsemessage: any;
  error: boolean=false;

constructor(private httpservice:HttpcallsService){

}
ngOnInit(): void {
  this.signupform=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    checkbox:new FormControl(null,[Validators.required])
  })

}
onsubmit(){
  this.error=false;
  this.success=false
  if(this.signupform.valid){
  let x={
    "username":this.signupform.value.username,
    "email": this.signupform.value.email,
    "password": this.signupform.value.password
  }

  this.httpservice.signup(x).pipe(catchError((error:any)=>{
    this.error=true;
    this.responsemessage=error.message;
    return throwError(this.responsemessage)
  }))
  .subscribe((e:any)=>{
    if(e.status=="Success"){
      this.success=true;
      this.responsemessage=e.message;
    }
    else{
      this.error=false;
      this.responsemessage=e.message
    }
  })
  }
  else{
    this.errmsg="all fields are required"
  }
}
}
