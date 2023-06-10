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


  }

  title = 'chatbox';
}
