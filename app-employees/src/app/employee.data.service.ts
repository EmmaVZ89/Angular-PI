import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { ServicesEmployeesService } from './services-employees.service';

@Injectable()
export class EmployeeDataService {
  constructor(private serviceAlertWindowService: ServicesEmployeesService) {}

  employees: Employee[] = [
    new Employee('Emmanuel', 'Zelarayan', 'President', 5000),
    new Employee('Soledad', 'Quiroz', 'Director', 6500),
    new Employee('Luna', 'Rodriguez', 'Administrative', 3500),
    new Employee('Jose', 'Perez', 'Intern', 3000),
  ];

  addEmployeeService(employee: Employee) {
    this.serviceAlertWindowService.showMessage(
      'Employee to add: \n' + employee.name + '\nSalary: ' + employee.salary
    );
    this.employees.push(employee);
  }
}
