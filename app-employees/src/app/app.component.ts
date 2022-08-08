import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from './employee.data.service';
import { Employee } from './employee.model';
import { ServicesEmployeesService } from './services-employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Employees list';
  nameField: string = '';
  lastNameField: string = '';
  positionField: string = '';
  salaryField: number = 0;
  employees: Employee[] = [];

  // employees: Employee[] = [
  //   new Employee('Emmanuel', 'Zelarayan', 'President', 5000),
  //   new Employee('Soledad', 'Quiroz', 'Director', 6500),
  //   new Employee('Luna', 'Rodriguez', 'Administrative', 3500),
  //   new Employee('Jose', 'Perez', 'Intern', 3000),
  // ];

  constructor(
    private myService: ServicesEmployeesService,
    private employeeService: EmployeeDataService
  ) {
    // this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees; // alternative
  }

  addEmployee() {
    const myEmployee = new Employee(
      this.nameField,
      this.lastNameField,
      this.positionField,
      this.salaryField
    );
    // this.myService.showMessage(`Employee's name: ${myEmployee.name}`);
    this.employeeService.addEmployeeService(myEmployee);
    // this.employees.push(myEmployee);
  }
}
