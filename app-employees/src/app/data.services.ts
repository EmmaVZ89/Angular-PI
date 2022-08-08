import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get(
      'https://my-customers-cd0e4-default-rtdb.firebaseio.com/data.json'
    );
  }

  createEmployees(employees: Employee[]) {
    this.httpClient
      .put(
        'https://my-customers-cd0e4-default-rtdb.firebaseio.com/data.json',
        employees
      )
      .subscribe(
        (reponse) => console.log('Employees created!'),
        (error) => console.log('Error: ' + error)
      );
  }

  updateEmployee(index: number, employee: Employee) {
    const url = 'https://my-customers-cd0e4-default-rtdb.firebaseio.com/data/'+index+'.json';

    this.httpClient.put(url, employee).subscribe(
      (response) => console.log('Employee updated!'),
      (error) => console.log('Error: ' + error)
    );
  }

  deleteEmployee(index: number) {
    const url = 'https://my-customers-cd0e4-default-rtdb.firebaseio.com/data/'+index+'.json';

    this.httpClient.delete(url).subscribe(
      (response) => console.log('Employee deleted!'),
      (error) => console.log('Error: ' + error)
    );
  }
}
