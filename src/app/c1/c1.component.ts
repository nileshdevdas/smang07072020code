import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Input()
  info: any = null;

  justnumber;
  @Output() cdataEvent = new EventEmitter();
  cdata = 'Super 1';
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      console.log("Fired.......................")
      this.justnumber = Math.random();
      this.cdataEvent.emit(this.justnumber);
    }, 5000);
  }

}
