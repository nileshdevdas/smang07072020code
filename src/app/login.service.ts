import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginSubject: Subject<any> = new Subject();
  constructor() { }

  getSubscriber() {
    // this will return the objservable so i can only subscribe and not publish 
    return this.loginSubject.asObservable();
  }

  getPublisher() {
    // this will return the subject on which i can use .next() for publishing the events
    return this.loginSubject;
  }

}
