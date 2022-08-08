import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee.data.service';
import { Employee } from '../employee.model';
import { ServicesEmployeesService } from '../services-employees.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  title = 'Employees list';
  nameField: string = '';
  lastNameField: string = '';
  positionField: string = '';
  salaryField: number = 0;
  employees: Employee[] = [];
  constructor(
    private myService: ServicesEmployeesService,
    private employeeService: EmployeeDataService
  ) {
    // this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
    // this.employees = this.employeeService.employees; // alternative
    this.employeeService.getEmployeesService().subscribe((myEmployees) => {
      console.log(myEmployees);
      this.employees = Object.values(myEmployees);
      this.employeeService.setEmployees(this.employees);
    });
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
