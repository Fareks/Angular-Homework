import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.scss']
})
export class Homework2Component implements OnInit,AfterViewInit  {

  @ViewChild('Title') title : ElementRef;
  fontsList = ['Inter','Montserrat','Open Sans','Rubik'];
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit()
  {
  }
  randomInt(max : number = 10)
  {
    return Math.floor(Math.random() * max);
  }
  randomShadow()
  {
    this.title.nativeElement.style.textShadow = `rgb(${this.randomInt(255)} ${this.randomInt(255)} ${this.randomInt(255)}) ${this.randomInt()}px ${this.randomInt()}px`;
  }
  randomColor()
  {
    this.title.nativeElement.style.color = `rgb(${this.randomInt(255)} ${this.randomInt(255)} ${this.randomInt(255)})`;
  }
  randomBackground()
  {
    this.title.nativeElement.style.backgroundColor = `rgb(${this.randomInt(255)} ${this.randomInt(255)} ${this.randomInt(255)})`;
  }
  randomFont()
  {
    this.title.nativeElement.style.fontFamily = `${this.fontsList[this.randomInt(this.fontsList.length)]}`;
    this.title.nativeElement.style.fontSize = `${10+ this.randomInt(20)}px`;
    console.log(this.title.nativeElement.style);
  }
}
