import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chidl1',
  templateUrl: './chidl1.component.html',
  styleUrls: ['./chidl1.component.css']
})
export class Chidl1Component implements OnInit {

  @Input() // unless you say you wish to accept a data from parent till 
  genre

  justnumber

  /// output allows me publis events when i emit one when property changes 
  @Output() cdataEvent = new EventEmitter();
  constructor() { }
  // i am saying whenever a obserable property of mine will change
  // i will emit a event which can subscribed by my parent
  ngOnInit() {
    setInterval(() => {
      this.justnumber = 'Child Prperty :' + Math.random();
      this.cdataEvent.emit(this.justnumber);
    }, 5000);
  }

}
