import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointmentComponent } from './viewappointment.component';

describe('ViewappointmentComponent', () => {
  let component: ViewappointmentComponent;
  let fixture: ComponentFixture<ViewappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewappointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
