import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenEmployeeComponent } from './children-employee/children-employee.component';
import { FeaturesEmployeeComponent } from './features-employee/features-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenEmployeeComponent,
    FeaturesEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
