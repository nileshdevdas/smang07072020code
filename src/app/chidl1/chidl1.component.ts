import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chidl1',
  templateUrl: './chidl1.component.html',
  styleUrls: ['./chidl1.component.css']
})
export class Chidl1Component implements OnInit {

  @Input() // unless you say you wish to accept a data from parent till 
  genre
  constructor() { }

  ngOnInit() {
  }

}
