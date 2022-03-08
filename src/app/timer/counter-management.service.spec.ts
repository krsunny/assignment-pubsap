import { TestBed } from '@angular/core/testing';

import { CounterManagementService } from './counter-management.service';

describe('CounterManagementService', () => {
  let service: CounterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
