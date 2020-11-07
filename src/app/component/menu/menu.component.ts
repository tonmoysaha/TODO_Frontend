import { Component, OnInit } from '@angular/core';
import {JwtAuthenticationServiceService} from '../../service/jwt-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public jwtAuthenticationService: JwtAuthenticationServiceService) { }

  ngOnInit(): void {

  }



}
