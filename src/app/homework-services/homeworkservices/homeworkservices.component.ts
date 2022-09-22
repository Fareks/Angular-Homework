import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber, Subscription, takeUntil } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-homeworkservices',
  templateUrl: './homeworkservices.component.html',
  styleUrls: ['./homeworkservices.component.scss']
})
export class HomeworkservicesComponent implements OnInit,OnChanges,OnDestroy {
  myArr : string[];
  myText : string;
  myText2 : string;
  sub : Subscription;
  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(private myService : MyServiceService) { }
  ngOnInit(): void {
    this.myService.textText$.pipe(takeUntil(this.unsubscribe$)).subscribe(item => this.myText = item);
    this.myService.textText2$.pipe(takeUntil(this.unsubscribe$)).subscribe(item => this.myText2 = item);
    this.myArr = this.myService.arr;
    console.log('Final result: ' + this.myArr);
  }
  ngOnChanges(){
    console.log('Final result: ' + this.myArr);
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
