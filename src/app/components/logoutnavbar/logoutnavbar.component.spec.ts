import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutnavbarComponent } from './logoutnavbar.component';

describe('LogoutnavbarComponent', () => {
  let component: LogoutnavbarComponent;
  let fixture: ComponentFixture<LogoutnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
