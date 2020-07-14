import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedin;
  user: User = new User();
  constructor() { }
  ngOnInit() {
    this.loggedin = sessionStorage.getItem('loginUser');
  }
  handleForm() {
    console.log(this.user.email);
    console.log(this.user.password);
    sessionStorage.setItem('loginUser', JSON.stringify(this.user));
    this.loggedin = this.user;
  }

  handleLogout() {
    console.log("logging out")
    sessionStorage.removeItem('loginUser');
    this.loggedin = null;
  }

}

