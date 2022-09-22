import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBackground]'
})
export class BackgroundDirective implements  OnInit{
    constructor ( private element : ElementRef, private renderer : Renderer2) {

    }
    ngOnInit () {
    this.element.nativeElement.style.backgroundColor = "rgb(117 212 243)";
       console.log(this.element); 
    }
}