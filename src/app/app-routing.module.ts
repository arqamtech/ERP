import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { AllEmployeesComponent } from './Employees/all-employees/all-employees.component';
import { AdddepartmentComponent } from './Department/department/adddepartment/adddepartment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-employee', component : AddEmployeeComponent },
  { path: 'all-employees', component : AllEmployeesComponent },
  { path: 'employee', component : EmployeeComponent },
  { path: 'department', component : AdddepartmentComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
