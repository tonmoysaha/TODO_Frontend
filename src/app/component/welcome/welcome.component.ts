import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomedataService} from '../../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name : string;
  constructor(private activatedRoute: ActivatedRoute,
              private service: WelcomedataService) { }

  ngOnInit(): void {
    //this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.execcuteWelcomeBean();
  }
}
