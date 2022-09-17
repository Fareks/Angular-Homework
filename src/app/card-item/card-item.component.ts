import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() id : number;
}
