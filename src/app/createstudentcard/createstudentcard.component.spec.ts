import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentcardComponent } from './createstudentcard.component';

describe('CreatestudentcardComponent', () => {
  let component: CreatestudentcardComponent;
  let fixture: ComponentFixture<CreatestudentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestudentcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatestudentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
