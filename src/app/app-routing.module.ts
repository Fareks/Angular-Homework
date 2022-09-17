import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'mainpage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'card/:id', component: CardInfoComponent },
  { path: 'login', component: LoginFormComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
