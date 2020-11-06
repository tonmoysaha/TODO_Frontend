import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../../service/basic-authentication.service';
import {error} from 'selenium-webdriver';

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

  constructor(private router: Router,
   private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
        },
      error => {
        this.invalidLogin = true;
      })
  }
}
