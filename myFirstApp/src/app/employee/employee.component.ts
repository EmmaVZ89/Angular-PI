import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // template: "<p>here goes an employee</p>",
  // styles: ['p {background-color:red;}'],
})
export class EmployeeComponent implements OnInit {
  name = 'Emmanuel';
  lastName = 'Zelarayan';
  age = 33;
  company = "Google";

  // getAge() {
  //   return this.age;
  // }

  getCompany(company: string) {}

  getCompanyKeyUp(company: string) {}

  enabledInput = false;
  registeredUser = false;
  registerText = 'There is no registered user';

  getRegisteresUser() {
    this.registeredUser = false;
  }

  setRegisteredUser(event: Event) {
    // alert("The user is already registered");
    // this.registerText = 'The user is already registered';
    if ((<HTMLInputElement>event.target).value === 'yes') {
      this.registerText = 'The user is already registered';
    } else {
      this.registerText = 'There is no registered user';
    }
  }

  // changeCompany(event:Event) {
  //   this.company = (<HTMLInputElement>event.target).value;
  // }

  constructor() {}
  ngOnInit(): void {}
}
