import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from './services/httpcalls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private httpservice: HttpcallsService) {}
  ngOnInit(): void {
    this.httpservice
      .getchats(
        'ab61610b-0e0f-46f3-9114-12d3c89031b3',
        'b3a6a2a8-c1cc-44ab-80be-c7b9d5dcd438'
      )
      .subscribe((arg) => {
        (this.data = arg)
        console.log(this.data)
      });

  }
  getchats(){
    console.log(this.data)
  }
  title = 'chatbox';
}
