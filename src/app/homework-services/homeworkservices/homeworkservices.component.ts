import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-homeworkservices',
  templateUrl: './homeworkservices.component.html',
  styleUrls: ['./homeworkservices.component.scss']
})
export class HomeworkservicesComponent implements OnInit,OnChanges {
  myArr : string[];
  myText : string;
  sub : Subscription;
  constructor(private myService : MyServiceService) { }
  ngOnInit(): void {
    this.sub = this.myService.textText$.subscribe(item => this.myText = item);
    this.myArr = this.myService.arr;
    console.log('Final result: ' + this.myArr);
  }
  ngOnChanges(){
    console.log('Final result: ' + this.myArr);
  }

}
