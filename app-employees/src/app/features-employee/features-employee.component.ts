import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicesEmployeesService } from '../services-employees.service';

@Component({
  selector: 'app-features-employee',
  templateUrl: './features-employee.component.html',
  styleUrls: ['./features-employee.component.css'],
})
export class FeaturesEmployeeComponent implements OnInit {
  @Output() featuresEmployees = new EventEmitter<string>();

  // constructor(private myService: ServicesEmployeesService) {}

  ngOnInit(): void {}

  addFeatures(features: string) {
    // this.myService.showMessage(`New Feature: ${features}`);
    this.featuresEmployees.emit(features);
  }
}
