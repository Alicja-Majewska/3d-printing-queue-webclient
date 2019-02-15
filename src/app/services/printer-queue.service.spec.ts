import { TestBed } from '@angular/core/testing';

import { PrinterQueueService } from './printer-queue.service';

describe('PrinterQueueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrinterQueueService = TestBed.get(PrinterQueueService);
    expect(service).toBeTruthy();
  });
});
