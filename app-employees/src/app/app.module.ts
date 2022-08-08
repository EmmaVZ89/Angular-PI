import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenEmployeeComponent } from './children-employee/children-employee.component';
import { EmployeeDataService } from './employee.data.service';
import { FeaturesEmployeeComponent } from './features-employee/features-employee.component';
import { ServicesEmployeesService } from './services-employees.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenEmployeeComponent,
    FeaturesEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ServicesEmployeesService, EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
