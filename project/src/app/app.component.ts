import { Component } from '@angular/core';
import { CARS } from './cars';

interface Car {
  username: string;
  password: string;
 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Log in';
searchText: any;
cars: Car[] = CARS;
  constructor(){

  }
  click(){
  
  }
}
