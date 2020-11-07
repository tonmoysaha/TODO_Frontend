import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtAuthenticationServiceService} from '../../service/jwt-authentication-service.service';


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
   private jwtAuthenticationService: JwtAuthenticationServiceService) {
  }

  ngOnInit(): void {
  }

  handleBasicAuthLogin() {

    this.jwtAuthenticationService.executeJwtAuhenticationService(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
        },
      error => {
        console.log(error);
        this.invalidLogin = true;
      })
  }
}
