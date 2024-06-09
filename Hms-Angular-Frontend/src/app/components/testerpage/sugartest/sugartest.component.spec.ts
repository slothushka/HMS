import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugartestComponent } from './sugartest.component';

describe('SugartestComponent', () => {
  let component: SugartestComponent;
  let fixture: ComponentFixture<SugartestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugartestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
