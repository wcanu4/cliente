import { TestBed } from '@angular/core/testing';

import { MensajeDeleteService } from './mensaje-delete.service';

describe('MensajeDeleteService', () => {
  let service: MensajeDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
