import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username === 'opi' && password === 'opisaha') {
      return true;
    }else {
      return false;
    }
  }
}
