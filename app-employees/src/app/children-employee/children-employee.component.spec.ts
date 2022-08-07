import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenEmployeeComponent } from './children-employee.component';

describe('ChildrenEmployeeComponent', () => {
  let component: ChildrenEmployeeComponent;
  let fixture: ComponentFixture<ChildrenEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
