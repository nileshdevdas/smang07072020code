import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MOVIES_URL} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class FetchmoviesService {
  // this fails to import if in app.module.ts
  // imports : [ HttpClientModule]
  constructor(public httpClient: HttpClient) {
    console.log('Service initialized');
  }

  getMovies(): Observable<any> {
    /// the movies_url is a constant centralized in one file
    return this.httpClient.get(MOVIES_URL);
  }
}
