import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


export  class HelloWorldBean {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(private httpclient: HttpClient) { }

  execcuteHelloWorld(): Observable<string>{

    let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    let url = 'http://localhost:8080/hello-world';
    return this.httpclient.get<string>(url, {headers});
    console.log("get your welcome message");
  }

  execcuteWelcomeBean(): Observable<HelloWorldBean>{
    let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    let url = 'http://localhost:8080/hello-world-bean';
    return this.httpclient.get<HelloWorldBean>(url , {headers});
  }

  execcuteWelcomeBeanWithPath(name): Observable<HelloWorldBean>{

    let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    });


    let url = `http://localhost:8080/hello-world-bean/${name}`;
    return this.httpclient.get<HelloWorldBean>(url , {headers});
  }

  createBasicAuthenticationHeader() {
    let username = "opi";
    let password = "opisaha";
    let basicAuthHeaderString = `Basic ` + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
