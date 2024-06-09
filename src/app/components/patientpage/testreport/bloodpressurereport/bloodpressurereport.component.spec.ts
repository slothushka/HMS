import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodpressurereportComponent } from './bloodpressurereport.component';

describe('BloodpressurereportComponent', () => {
  let component: BloodpressurereportComponent;
  let fixture: ComponentFixture<BloodpressurereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodpressurereportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodpressurereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
