import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL, AUTHENTICATED_USER, TOKEN} from '../constants';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }


  executeJwtAuhenticationService(username, password) {
    let url = `${API_URL}/authenticate`;
    return this.httpClient.post<any>(url , {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }


  getAuthencatedUser() {
    return  sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticationToken() {
    if (this.getAuthencatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    let token = sessionStorage.getItem(TOKEN);
    return !(user === null && token === null);

  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
