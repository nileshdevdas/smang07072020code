import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedin;
  user: User = new User();
  constructor(public loginService: LoginService) { }
  ngOnInit() {
    this.loggedin = sessionStorage.getItem('loginUser');
  }
  handleForm() {
    console.log(this.user.email);
    console.log(this.user.password);
    sessionStorage.setItem('loginUser', JSON.stringify(this.user));
    this.loggedin = this.user;
    // you have logged in you need to tell the other components that youhave logged so broadcast .... 
    // this is what is going to be the next () the next event.....
    this.loginService.getPublisher().next(this.user);
  }

  handleLogout() {
    console.log('logging out')
    sessionStorage.removeItem('loginUser');
    this.loggedin = null;
    // broadcast you have logged out
    // on logout alos the next event
    this.loginService.getPublisher().next(null);
  }

}

