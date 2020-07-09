import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  // movies is state stored in the component which can displayed in the page
  movies = ['Harry Potter', 'Living Daylights', 'Chronicles of Narnia', 'Sherlock Holmes']
  constructor() { }

  ngOnInit() {
  }

}
