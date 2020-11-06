import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeBasicAuthenticationService(username, password) {

    let basicAuthHeaderString = `Basic ` + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    });
    let url = `http://localhost:8080/basicAuth`;
    return this.httpClient.get(url , {headers , responseType: 'text'}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

   getAuthencatedUser() {
    return  sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticationToken() {
    if (this.getAuthencatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }


}
