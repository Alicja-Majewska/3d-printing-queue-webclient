import { TestBed } from '@angular/core/testing';

import { HeightCalculatorService } from './height-calculator.service';

describe('HeightCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeightCalculatorService = TestBed.get(HeightCalculatorService);
    expect(service).toBeTruthy();
  });
});
