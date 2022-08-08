import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee.data.service';
import { Employee } from '../employee.model';
import { ServicesEmployeesService } from '../services-employees.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css'],
})
export class ProjectsComponentComponent implements OnInit {
  nameField: string = '';
  lastNameField: string = '';
  positionField: string = '';
  salaryField: number = 0;
  employees: Employee[] = [];

  constructor(
    private router: Router,
    private myService: ServicesEmployeesService,
    private employeeService: EmployeeDataService
  ) {
    // this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees; // alternative
  }

  goHome() {
    this.router.navigate(['']);
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
    this.router.navigate(['']);
    // this.employees.push(myEmployee);
  }
}
