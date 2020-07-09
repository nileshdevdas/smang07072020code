import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  // movies is state stored in the component which can displayed in the page
  expressdate = new Date();

  movies = [
    'Harry Potter',
    'Living Daylights',
    'Chronicles of Narnia',
    'Sherlock Holmes'
  ];
  handleReload() {
    this.movies.push('Movies1');
  }
  constructor() { }
  // components lifecycle
  ngOnInit() {
    // call back which give gurantee that component is initialized 
  }

}
