import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionresultComponent } from './prescriptionresult.component';

describe('PrescriptionresultComponent', () => {
  let component: PrescriptionresultComponent;
  let fixture: ComponentFixture<PrescriptionresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescriptionresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
