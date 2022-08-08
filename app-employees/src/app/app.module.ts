import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenEmployeeComponent } from './children-employee/children-employee.component';
import { EmployeeDataService } from './employee.data.service';
import { FeaturesEmployeeComponent } from './features-employee/features-employee.component';
import { ServicesEmployeesService } from './services-employees.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'projects', component: ProjectsComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'update/:id', component: UpdateComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: CustomErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChildrenEmployeeComponent,
    FeaturesEmployeeComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    UpdateComponentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicesEmployeesService, EmployeeDataService, DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
