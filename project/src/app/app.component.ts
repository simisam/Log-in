import { Component } from '@angular/core';
import { user } from './user';
interface user {
  username:"string";
  password:"string"
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user:any;
  title = 'Log in';
searchText: any;
// user : user[] =user;
  constructor(){

  }
  click(){
  
  }
}
