import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginSubject: Subject<any> = new Subject();
  constructor() { }
  getSubscriber() {
    return this.loginSubject.asObservable();
  }
  getPublisher() {
    return this.loginSubject;
  }

}
