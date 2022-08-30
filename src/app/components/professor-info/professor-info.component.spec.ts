import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorInfoComponent } from './professor-info.component';

describe('ProfessorInfoComponent', () => {
  let component: ProfessorInfoComponent;
  let fixture: ComponentFixture<ProfessorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
