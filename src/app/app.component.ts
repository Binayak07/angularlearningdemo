import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Demo';
name: string;
config: object;
  constructor(private dataService: DataService) {}

  getName() {
    this.name = this.dataService.showName();
  }

  ngOnInit(){
  this.getName();
  this.showConfig();
  }

  showConfig() {
    this.dataService.getPokemons()
      .subscribe((data: DataService) =>{
      this.config= data
      });
  }
}

