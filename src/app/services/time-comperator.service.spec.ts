import { TestBed } from '@angular/core/testing';

import { TimeComperatorService } from './time-comperator.service';

describe('TimeComperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeComperatorService = TestBed.get(TimeComperatorService);
    expect(service).toBeTruthy();
  });
});
