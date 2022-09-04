import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegisterDataComponent } from './main-register-data.component';

describe('MainRegisterDataComponent', () => {
  let component: MainRegisterDataComponent;
  let fixture: ComponentFixture<MainRegisterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRegisterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRegisterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
