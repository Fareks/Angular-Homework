import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homework2-item',
  templateUrl: './homework2-item.component.html',
  styleUrls: ['./homework2-item.component.scss']
})
export class Homework2ItemComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.iconContainer.nativeElement.style.backgroundColor = this.bgColor;
    if(this.additionalContent)
    {
      this.additionalContent.nativeElement.style.fontSize = "25px";
    }
  }
  @ViewChild('iconContainer') iconContainer : ElementRef;
  @ContentChild('additionalContent') additionalContent : ElementRef;
  @Output() onButtonClick = new EventEmitter();
  @Input() imgSrc = 'https://cdn-icons-png.flaticon.com/512/27/27482.png';
  @Input() title : string = ' Title';
  @Input() bgColor : string = 'White';
  onClick()
  {
    this.onButtonClick.emit();
  }
}
