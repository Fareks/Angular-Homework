import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private myService : MyServiceService) { }

  textFromService : string;
  ngOnInit(): void {
  }
  setNewText() {
    this.myService.setText("new Text from component!");
    this.myService.addToArr("new item!");
  }
}
