import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugartestreportComponent } from './sugartestreport.component';

describe('SugartestreportComponent', () => {
  let component: SugartestreportComponent;
  let fixture: ComponentFixture<SugartestreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugartestreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugartestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
