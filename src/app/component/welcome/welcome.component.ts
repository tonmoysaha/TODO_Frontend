import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloWorldBean , WelcomedataService} from '../../service/data/welcomedata.service';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name : string;
  welcome: string;
  errorResponse: string;
  message: HelloWorldBean;
  messageWittPAth: HelloWorldBean;
  constructor(private activatedRoute: ActivatedRoute,
              private service: WelcomedataService) { }

  ngOnInit(): void {
    //this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.execcuteHelloWorld().subscribe(data =>
      this.welcome = data
    );

    this.service.execcuteWelcomeBean().subscribe(data =>
      this.message = data
    );

    this.service.execcuteWelcomeBeanWithPath(this.name).subscribe(data =>
      this.messageWittPAth = data, error => this.errorResponse = error.error.message
    );
  }
}
