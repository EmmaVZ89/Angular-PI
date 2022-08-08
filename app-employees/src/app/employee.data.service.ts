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

  findEmployee(index: number) {
    const employee: Employee = this.employees[index];
    return employee;
  }

  updateEmployeeData(index:number, employee:Employee){
    const employeeToUpdate = this.employees[index];
    employeeToUpdate.name = employee.name;
    employeeToUpdate.lastName = employee.lastName;
    employeeToUpdate.position = employee.position;
    employeeToUpdate.salary = employee.salary;
  }

  deleteEmployeeData(index:number){
    this.employees.splice(index, 1);
  }
}
