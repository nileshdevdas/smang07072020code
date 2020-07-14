import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FetchmoviesService } from '../fetchmovies.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  // movies is state stored in the component which can displayed in the page
  expressdate = new Date();
  movies = [];
  gold = null;

  handleReload() {
    console.log('From MoviesList');
    // promisory subscriptions
  }

  constructor(public fms: FetchmoviesService, public cms: CommunicatorService) {
  }

  ngOnInit() {
    this.cms.getSubscriber().subscribe((data) => {
      console.log("XXXXXXXXXXXXXXXXXXXXxxx");
      console.log(data);
    });
    setInterval(() => {
      this.fms.getMovies().subscribe((data) => {
        this.movies = data;
      });
      console.log('Refreshing ..........')
    }, 5000);
  }

  setGold() {
    this.gold = true;
  }
  noGold() {
    this.gold = null;
  }

}
