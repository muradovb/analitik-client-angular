import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderImages = [
    './src/images/a1.jpg',
    './src/images/a2.jpg',
    './src/images/a3.jpg',
    './src/images/a4.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
