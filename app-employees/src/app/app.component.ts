import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Employees list';
  nameField: string = '';
  lastNameField: string = '';
  positionField: string = '';
  salaryField: number = 0;
  employees: Employee[] = [
    new Employee('Emmanuel', 'Zelarayan', 'President', 5000),
    new Employee('Soledad', 'Quiroz', 'Director', 6500),
    new Employee('Luna', 'Rodriguez', 'Administrative', 3500),
    new Employee('Jose', 'Perez', 'Intern', 3000),
  ];

  addEmployee() {
    const myEmployee = new Employee(
      this.nameField,
      this.lastNameField,
      this.positionField,
      this.salaryField
    );
    this.employees.push(myEmployee);
  }
}
