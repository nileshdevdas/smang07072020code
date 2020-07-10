import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FetchmoviesService } from '../fetchmovies.service';
@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  // movies is state stored in the component which can displayed in the page
  expressdate = new Date();
  movies = [];

  handleReload() {
    console.log("From MoviesList ");
    this.movies = this.fms.getMovies();
  }
  constructor(public fms: FetchmoviesService) { }
  ngOnInit() {
  }

}
