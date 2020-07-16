import { Component, OnInit } from '@angular/core';
import { FetchmoviesService } from '../fetchmovies.service';
import { CommunicatorService } from '../communicator.service';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth0Service } from '../auth0.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 10;
  loggedin;
  name = of([1, 2, 3, 4, 5, 6, 10, 20, 30, 40]);
  constructor(public loginService: LoginService, public auth: Auth0Service) {
  }
  ngOnInit() {
    this.loggedin = sessionStorage.getItem('loginUser');
    // i want to listen on the events call  loginService --Subscriber events ---->
    this.loginService.getSubscriber().subscribe((data) => {
      this.loggedin = data;
    });
    this.name.pipe(map(name => name.map(each => each > 10))).subscribe((result) => {
      console.log(result);
    });
  }
}
