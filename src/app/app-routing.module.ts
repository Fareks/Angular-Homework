import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Homework3Component } from './homework-3/homework3/homework3.component';
import { HomeworkservicesComponent } from './homework-services/homeworkservices/homeworkservices.component';
import { Homework2Component } from './homework2/homework2.component';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'mainpage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'card/:id', component: CardInfoComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'homework-2', component: Homework2Component },
  { path: 'homeworks', component: HomeworksComponent },
  { path: 'homework-3', component: Homework3Component},
  { path: 'app-homeworkservices', component: HomeworkservicesComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
