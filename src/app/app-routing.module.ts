import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LoginComponent} from './component/login/login.component';
import {ErrorComponent} from './component/error/error.component';
import {ListTodosComponent} from './component/list-todos/list-todos.component';
import {LogoutComponent} from './component/logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {TodoComponent} from './component/todo/todo.component';


const routes: Routes = [
  {path: 'welcome/:name', component: WelcomeComponent , canActivate: [RouteGuardService]},
  {path: 'todos' , component: ListTodosComponent, canActivate: [RouteGuardService]},
  {path: 'logout' , component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'todos/:id' , component: TodoComponent, canActivate: [RouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '' , component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
