import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ErrorComponent } from './component/error/error.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './component/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
