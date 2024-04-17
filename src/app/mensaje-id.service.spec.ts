import { TestBed } from '@angular/core/testing';

import { MensajeIdService } from './mensaje-id.service';

describe('MensajeIdService', () => {
  let service: MensajeIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
