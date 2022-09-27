import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { LoginModule } from './login/login.module';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { AlertComponent } from './alert/alert.component';
import { Homework2Component } from './homework2/homework2.component';
import { Homework2ItemComponent } from './homework2-item/homework2-item.component';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { HomeworksItemComponent } from './homeworks-item/homework-item.component';
import { Homework3Component } from './homework-3/homework3/homework3.component';
import { BackgroundDirective } from './homework-3/directives/background.directive';
import { MyPipePipe } from './homework-3/pipes/my-pipe.pipe';
import { HomeworkservicesComponent } from './homework-services/homeworkservices/homeworkservices.component';
import { MyServiceService } from './homework-services/my-service.service';
import { ItemComponent } from './homework-services/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialPageComponent } from './angular-material-page/angular-material-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    CardItemComponent,
    CardInfoComponent,
    Homework2Component,
    Homework2ItemComponent,
    HomeworksComponent,
    HomeworksItemComponent,
    Homework3Component, 
    BackgroundDirective, 
    MyPipePipe, 
    HomeworkservicesComponent, 
    ItemComponent, 
    AngularMaterialPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatChipsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
