import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    if(this.additionalContent)
    {
      this.additionalContent.nativeElement.style.fontSize = "25px";
    }
  }
  @ContentChild('additionalContent') additionalContent : ElementRef;
  @Output() onButtonClick = new EventEmitter();
  @Input() imgSrc = 'https://cdn-icons-png.flaticon.com/512/27/27482.png';
  @Input() title : string = ' Title';
  onClick()
  {
    this.onButtonClick.emit();
  }
}
