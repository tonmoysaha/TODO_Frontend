import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationServiceService } from './jwt-authentication-service.service';

describe('JwtAuthenticationServiceService', () => {
  let service: JwtAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
