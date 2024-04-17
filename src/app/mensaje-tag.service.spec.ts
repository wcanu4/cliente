import { TestBed } from '@angular/core/testing';

import { MensajeTagService } from './mensaje-tag.service';

describe('MensajeTagService', () => {
  let service: MensajeTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
