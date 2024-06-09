import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpageComponent } from './doctorpage.component';

describe('DoctorpageComponent', () => {
  let component: DoctorpageComponent;
  let fixture: ComponentFixture<DoctorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
