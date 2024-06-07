import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentlandingComponent } from './appointmentlanding.component';

describe('AppointmentlandingComponent', () => {
  let component: AppointmentlandingComponent;
  let fixture: ComponentFixture<AppointmentlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
