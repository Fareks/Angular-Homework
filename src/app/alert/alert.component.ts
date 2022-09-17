import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVissible : boolean = false;
  alertText : string = "Wow!";

    showMessage(text : string){
      
      this.alertText = text;
      this.isVissible = true;
      setTimeout(() => {this.isVissible=false;}, 3000);
    }
    onChange (text : string)
    {
      this.alertText = text;
    }
    
}
