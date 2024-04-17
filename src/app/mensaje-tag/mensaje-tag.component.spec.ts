import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeTagComponent } from './mensaje-tag.component';

describe('MensajeTagComponent', () => {
  let component: MensajeTagComponent;
  let fixture: ComponentFixture<MensajeTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeTagComponent]
    });
    fixture = TestBed.createComponent(MensajeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
