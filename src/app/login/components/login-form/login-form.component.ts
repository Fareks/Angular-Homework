import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onLogin (alertRef : AlertComponent){
    alertRef.showMessage('Login doesn`t work!');
  }
}
