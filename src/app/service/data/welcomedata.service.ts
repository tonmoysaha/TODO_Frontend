import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../constants';


export  class HelloWorldBean {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(private httpclient: HttpClient) { }

  execcuteHelloWorld(): Observable<string>{
    let url = `${API_URL}/hello-world`;
    return this.httpclient.get(url, {responseType: 'text'});
  }

  execcuteWelcomeBean(): Observable<HelloWorldBean>{
    let url = `${API_URL}/hello-world-bean`;
    return this.httpclient.get<HelloWorldBean>(url);
  }

  execcuteWelcomeBeanWithPath(name): Observable<HelloWorldBean>{
    let url = `${API_URL}/hello-world-bean/${name}`;
    return this.httpclient.get<HelloWorldBean>(url);
  }

}
