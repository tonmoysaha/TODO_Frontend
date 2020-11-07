import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtAuthenticationServiceService} from '../jwt-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicOAuthServiceInterceptorService implements HttpInterceptor{

  constructor(private jwtAuthService: JwtAuthenticationServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwtAuthHeaderString = this.jwtAuthService.getAuthenticationToken();
    let userName = this.jwtAuthService.getAuthencatedUser();

    if (jwtAuthHeaderString && userName) {
      request = request.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
