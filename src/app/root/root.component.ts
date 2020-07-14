import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() {
  }
  cities = [];

  message = 'Hello from Nilesh component';

  ngOnInit() {
    if (localStorage.getItem('CITIES')) {
      this.cities = JSON.parse(localStorage.getItem('CITIES'));
    }
  }

}
