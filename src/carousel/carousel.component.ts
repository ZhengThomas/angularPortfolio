import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  images = ["/assets/images/opgg.png", "assets/images/jumpBounce.png", "assets/images/chess.png"]

  ngOnInit(): void {
  }

}
