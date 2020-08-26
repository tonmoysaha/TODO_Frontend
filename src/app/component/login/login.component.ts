import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  handleLogin() {

    console.log(this.username + ' ' + this.password);
    if (this.username === 'opi' && this.password === 'opisaha') {
      this.invalidLogin = false;
      this.router.navigate(['welcome']);
    } else {
      this.invalidLogin = true;
    }
  }
}
