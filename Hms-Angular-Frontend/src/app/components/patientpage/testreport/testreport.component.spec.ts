import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestreportComponent } from './testreport.component';

describe('TestreportComponent', () => {
  let component: TestreportComponent;
  let fixture: ComponentFixture<TestreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
