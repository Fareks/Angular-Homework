import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlertComponent } from '../alert/alert.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
