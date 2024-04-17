import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeIdComponent } from './mensaje-id.component';

describe('MensajeIdComponent', () => {
  let component: MensajeIdComponent;
  let fixture: ComponentFixture<MensajeIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeIdComponent]
    });
    fixture = TestBed.createComponent(MensajeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
