import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesdatabaseComponent } from './employeesdatabase.component';

describe('EmployeesdatabaseComponent', () => {
  let component: EmployeesdatabaseComponent;
  let fixture: ComponentFixture<EmployeesdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesdatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
