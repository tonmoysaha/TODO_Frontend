import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicOAuthServiceInterceptorService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     let basicAuthHeaderString = this.basicAuthService.getAuthenticationToken();
    let userName = this.basicAuthService.getAuthencatedUser();

    if (basicAuthHeaderString && userName) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
