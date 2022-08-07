import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-features-employee',
  templateUrl: './features-employee.component.html',
  styleUrls: ['./features-employee.component.css'],
})
export class FeaturesEmployeeComponent implements OnInit {
  @Output() featuresEmployees = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addFeatures(features: string) {
    this.featuresEmployees.emit(features);
  }
}
