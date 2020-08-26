import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleLogin() {

    console.log(this.username + ' ' + this.password);
    if (this.username === 'opi' && this.password === 'opisaha') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
