import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseParComponent } from './course-par.component';

describe('CourseParComponent', () => {
  let component: CourseParComponent;
  let fixture: ComponentFixture<CourseParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
