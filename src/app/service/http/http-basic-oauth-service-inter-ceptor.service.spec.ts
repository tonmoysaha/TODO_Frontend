import { TestBed } from '@angular/core/testing';

import { HttpBasicOAuthServiceInterceptorService } from './http-basic-o-auth-service-interceptor.service';

describe('HttpBasicOAuthServiceInterceptorService', () => {
  let service: HttpBasicOAuthServiceInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasicOAuthServiceInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
