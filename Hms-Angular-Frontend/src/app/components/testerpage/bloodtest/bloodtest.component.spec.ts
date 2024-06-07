import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodtestComponent } from './bloodtest.component';

describe('BloodtestComponent', () => {
  let component: BloodtestComponent;
  let fixture: ComponentFixture<BloodtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
