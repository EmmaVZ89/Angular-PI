import { TestBed } from '@angular/core/testing';

import { ServicesEmployeesService } from './services-employees.service';

describe('ServicesEmployeesService', () => {
  let service: ServicesEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
