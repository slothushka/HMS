import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterloginComponent } from './testerlogin.component';

describe('TesterloginComponent', () => {
  let component: TesterloginComponent;
  let fixture: ComponentFixture<TesterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesterloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
