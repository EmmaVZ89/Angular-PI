import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-children-employee',
  templateUrl: './children-employee.component.html',
  styleUrls: ['./children-employee.component.css'],
})
export class ChildrenEmployeeComponent implements OnInit {
  @Input() employeeFromList: Employee;
  @Input() index: number;

  arrayFeatures: any[] = [];

  addFeature(newFeature: string) {
    this.arrayFeatures.push(newFeature);
  }

  constructor() {}
  ngOnInit(): void {}
}
