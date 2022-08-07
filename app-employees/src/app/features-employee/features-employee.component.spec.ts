import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesEmployeeComponent } from './features-employee.component';

describe('FeaturesEmployeeComponent', () => {
  let component: FeaturesEmployeeComponent;
  let fixture: ComponentFixture<FeaturesEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
