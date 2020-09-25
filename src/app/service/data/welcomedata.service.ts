import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor() { }

  execcuteWelcomeBean(){
    console.log("get your welcome message")
  }
}
