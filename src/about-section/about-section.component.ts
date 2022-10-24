import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  constructor() {
    this.rotate = this.rotate.bind(this);
  }

  rotation = 0;

  rotate(){
    this.rotation += 11.25;
    console.log(this.rotation);
  }

  ngOnInit(): void {
    setInterval(this.rotate, 1000);
  }
}
