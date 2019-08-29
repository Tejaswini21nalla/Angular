import { TestBed } from '@angular/core/testing';

import { CompcommunicationService } from './compcommunication.service';

describe('CompcommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompcommunicationService = TestBed.get(CompcommunicationService);
    expect(service).toBeTruthy();
  });
});
