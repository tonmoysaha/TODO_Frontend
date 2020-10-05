import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloWorldBean , WelcomedataService} from '../../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name : string;
  welcome: string;
  message: HelloWorldBean;
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
  }
}
