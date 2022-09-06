import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaRowComponent } from './cronograma-row.component';

describe('CronogramaRowComponent', () => {
  let component: CronogramaRowComponent;
  let fixture: ComponentFixture<CronogramaRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
