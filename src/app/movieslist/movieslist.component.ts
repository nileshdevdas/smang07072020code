import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {FetchmoviesService} from '../fetchmovies.service';

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
    console.log('From MoviesList');
    // promisory subscriptions
  }

  constructor(public fms: FetchmoviesService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.fms.getMovies().subscribe((data) => {
        this.movies = data;
      });
      console.log('Refreshing ..........')
    }, 5000);
  }

}
