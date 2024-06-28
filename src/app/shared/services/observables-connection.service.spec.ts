import { TestBed } from '@angular/core/testing';

import { ObservablesConnectionService } from './observables-connection.service';

describe('ObservablesConnectionService', () => {
  let service: ObservablesConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
