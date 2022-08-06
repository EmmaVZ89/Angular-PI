import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  // template: "<p>here goes an employee</p>",
  // styles: ['p {background-color:red;}'],
})
export class EmployeeComponent implements OnInit {
  name = "Emmanuel";
  lastName = "Zelarayan";
  age = 33;
  // company = "Home";

  // getAge() {
  //   return this.age;
  // }

  getCompany(company:string) {
  }

  getCompanyKeyUp(company:string){
  }

  constructor() {}
  ngOnInit(): void {}
}
