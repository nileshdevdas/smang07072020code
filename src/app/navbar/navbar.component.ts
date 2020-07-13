import {Component, OnInit} from '@angular/core';
import {FetchmoviesService} from '../fetchmovies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 10;

  constructor(public fms: FetchmoviesService) {
  }

  ngOnInit() {
    console.log(this.fms.getMovies(), " From Navigator");
  }

}
