import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  mygenre;
  childData;
  constructor() { }

  onChildChange(event) {
    console.log("Event ", event);
    this.childData = event;
  }
  ngOnInit() {
    setInterval(() => {
      this.mygenre = Math.random();
    }, 5000);
  }

}
