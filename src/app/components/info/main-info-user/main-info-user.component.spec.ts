import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoUserComponent } from './main-info-user.component';

describe('MainInfoUserComponent', () => {
  let component: MainInfoUserComponent;
  let fixture: ComponentFixture<MainInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
