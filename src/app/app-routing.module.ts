import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LoginComponent} from './component/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
