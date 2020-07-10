import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchmoviesService {
  private micheal = [
    'Harry Potter',
    'Living Daylights',
    'Chronicles of Narnia',
    'Sherlock Holmes'
  ];
  constructor() {
    console.log('Service initialized');
  }
  getMovies() {
    return this.micheal;
  }

}
