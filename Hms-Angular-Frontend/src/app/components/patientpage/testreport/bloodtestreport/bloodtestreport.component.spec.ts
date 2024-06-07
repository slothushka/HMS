import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodtestreportComponent } from './bloodtestreport.component';

describe('BloodtestreportComponent', () => {
  let component: BloodtestreportComponent;
  let fixture: ComponentFixture<BloodtestreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodtestreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodtestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
