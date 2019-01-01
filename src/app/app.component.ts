import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-project';
name: string;
  constructor(private dataService: DataService) {}

  getName() {
    this.name = this.dataService.showName();
  }

  ngOnInit(){
  this.getName();
  }
}
