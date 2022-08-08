import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../employee.data.service';
import { Employee } from '../employee.model';
import { ServicesEmployeesService } from '../services-employees.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  nameField: string = '';
  lastNameField: string = '';
  positionField: string = '';
  salaryField: number = 0;
  employees: Employee[] = [];
  index: number;
  action: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myService: ServicesEmployeesService,
    private employeeService: EmployeeDataService
  ) {}

  ngOnInit(): void {
    this.action = parseInt(this.route.snapshot.queryParams['action']);
    this.employees = this.employeeService.employees;
    this.index = this.route.snapshot.params['id'];
    const employee: Employee = this.employeeService.findEmployee(this.index);
    this.nameField = employee.name;
    this.lastNameField = employee.lastName;
    this.positionField = employee.position;
    this.salaryField = employee.salary;
  }

  goHome() {
    this.router.navigate(['']);
  }

  updateEmployee() {
    const myEmployee = new Employee(
      this.nameField,
      this.lastNameField,
      this.positionField,
      this.salaryField
    );
    // this.myService.showMessage(`Employee's name: ${myEmployee.name}`);
    this.employeeService.updateEmployeeData(this.index, myEmployee);
    this.router.navigate(['']);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployeeData(this.index);
    this.router.navigate(['']);
  }

  handleUpdateDeleteEmployee() {
    if (this.action === 1) {
      this.updateEmployee();
    } else if (this.action === 2) {
      this.deleteEmployee();
    }
    this.router.navigate(['']);
  }
}
