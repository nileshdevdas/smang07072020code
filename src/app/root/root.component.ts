import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() {
  }

  message = 'Hello from Nilesh component';

  ngOnInit() {
  }

}
