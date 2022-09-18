import { TestBed } from '@angular/core/testing';

import { NginxRequestsService } from './nginx-requests.service';

describe('NginxRequestsService', () => {
  let service: NginxRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NginxRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
