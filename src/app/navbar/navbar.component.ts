import { Component, OnInit } from '@angular/core';
import { FetchmoviesService } from '../fetchmovies.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 10;
  loggedin;
  constructor(public fms: FetchmoviesService, public cms: CommunicatorService) {
  }
  ngOnInit() {
    this.loggedin = sessionStorage.getItem('loginUser')
  }
}
