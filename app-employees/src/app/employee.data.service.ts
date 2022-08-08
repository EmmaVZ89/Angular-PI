import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Employee } from './employee.model';
import { ServicesEmployeesService } from './services-employees.service';

@Injectable()
export class EmployeeDataService {
  constructor(
    private serviceAlertWindowService: ServicesEmployeesService,
    private dataService: DataServices
  ) {}

  employees: Employee[] = [];

  // employees: Employee[] = [
  //   new Employee('Emmanuel', 'Zelarayan', 'President', 5000),
  //   new Employee('Soledad', 'Quiroz', 'Director', 6500),
  //   new Employee('Luna', 'Rodriguez', 'Administrative', 3500),
  //   new Employee('Jose', 'Perez', 'Intern', 3000),
  // ];

  setEmployees(myEmployees: Employee[]) {
    this.employees = myEmployees;
  }

  getEmployeesService() {
    return this.dataService.getEmployees();
  }

  addEmployeeService(employee: Employee) {
    this.serviceAlertWindowService.showMessage(
      'Employee to add: \n' + employee.name + '\nSalary: ' + employee.salary
    );
    this.employees.push(employee);
    this.dataService.createEmployees(this.employees); // add employee to DB
  }

  findEmployee(index: number) {
    const employee: Employee = this.employees[index];
    return employee;
  }

  updateEmployeeData(index: number, employee: Employee) {
    const employeeToUpdate = this.employees[index];
    employeeToUpdate.name = employee.name;
    employeeToUpdate.lastName = employee.lastName;
    employeeToUpdate.position = employee.position;
    employeeToUpdate.salary = employee.salary;

    this.dataService.updateEmployee(index, employeeToUpdate);
    this.employees[index] = employeeToUpdate;
    this.setEmployees(this.employees);
  }

  deleteEmployeeData(index: number) {
    this.employees.splice(index, 1);
    this.dataService.deleteEmployee(index);

    if(this.employees.length !== 0) {
      this.dataService.createEmployees(this.employees);
    }
  }
}
