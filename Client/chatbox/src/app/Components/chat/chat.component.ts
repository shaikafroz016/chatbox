import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { AuthcheckService } from 'src/app/services/authcheck.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  reciver:any;
  AllUsers:any=[];
  searchform: any;
  contactlist:any=[]
  filteredOptions!: Observable<any>;
  contacts:any=[]
  isrefreshcontact: any;


constructor(private router:Router,private authservice:AuthcheckService,private httpservice:HttpcallsService,private userservise:CommonService,private _observable:ObservableService){

}
 async ngOnInit() {
    this.validatesession();
    await this.getUsers();
    await this.getcontactsList();


    this.searchform=new FormControl(null)
    this.filteredOptions = this.searchform.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filtercontact()
      this._observable.reciveCallContactValue().subscribe(async res=>{
        if(res){
          this.contacts=[];
          await this.getcontactsList();
          this.filtercontact();
        }
      })
  }
   
  filtercontact(){
    this.contactlist=this.contactlist.reciverslists;
    this.contactlist.forEach((element:any) => {
      const matchedUser=this.AllUsers.find((user:any)=>
        user.userId==element.contact
      )
      if(matchedUser){
        this.contacts.push({
          userId:matchedUser.userId,
          name:matchedUser.name
        })
      }
    });
    console.log("contacts",this.contacts)
  }
    _filter(value: any) {
    const filterValue = value.toLowerCase();

    return this.AllUsers.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }
  validatesession(){
    if(this.authservice.isAuthenticated()){

      this.router.navigateByUrl("/login")
    }

  }

  selected(data:any){
    let x=this.AllUsers.filter((e:any)=>e.name==data?.option?.value)
    if(x.length>0){
      this.reciver=x[0];
    }
    else{
      this.reciver=data
    }

  }
  async getcontactsList(){
    let sender_id=this.userservise.getUserId
    this.contactlist=await this.httpservice.getcontacts(sender_id)
  }
 async getUsers(){
   this.AllUsers=await this.httpservice.getUsers()
  }

}
