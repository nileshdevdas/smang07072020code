import { Component, OnInit } from '@angular/core';
import { FetchmoviesService } from '../fetchmovies.service';
import { CommunicatorService } from '../communicator.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 10;
  loggedin;
  constructor(public loginService: LoginService) {
  }
  ngOnInit() {
    this.loggedin = sessionStorage.getItem('loginUser');
    // i want to listen on the events call  loginService --Subscriber events ---->
    this.loginService.getSubscriber().subscribe((data) => {
      this.loggedin = data;
    });
  }
}
