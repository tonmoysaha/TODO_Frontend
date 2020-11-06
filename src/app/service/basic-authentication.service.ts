import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcomedata.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeBasicAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    });
    let url = `http://localhost:8080/basicAuth`;
    return this.httpClient.get<string>(url , {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
        }
      )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }


}
