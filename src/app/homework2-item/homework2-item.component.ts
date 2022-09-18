import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homework2-item',
  templateUrl: './homework2-item.component.html',
  styleUrls: ['./homework2-item.component.scss']
})
export class Homework2ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output() onButtonClick = new EventEmitter();
  @Input() imgSrc = 'https://cdn-icons-png.flaticon.com/512/27/27482.png';
  @Input() title : string = ' Title';
  onClick()
  {
    this.onButtonClick.emit();
  }
}
