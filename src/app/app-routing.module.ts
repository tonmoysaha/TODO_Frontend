import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LoginComponent} from './component/login/login.component';
import {ErrorComponent} from './component/error/error.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: '' , component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
