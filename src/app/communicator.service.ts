import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CommunicatorService {
  subject: Subject<any> = new Subject();
  constructor() {
  }

  getSubscriber() {
    return this.subject.asObservable()
  }
  getPublisher() {
    return this.subject;
  }
}
