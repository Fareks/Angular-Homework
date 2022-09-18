import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeworks-item',
  templateUrl: './homework-item.component.html',
  styleUrls: ['./homework-item.component.scss']
})
export class HomeworksItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() homeworkName :  string = "my homework";
  @Input() link : string ="/";
}
