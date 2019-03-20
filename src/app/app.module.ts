import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { AllEmployeesComponent } from './Employees/all-employees/all-employees.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { AdddepartmentComponent } from './Department/department/adddepartment/adddepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AllEmployeesComponent,
    EmployeeComponent,
    AdddepartmentComponent,
  ],
  entryComponents: [
    AddEmployeeComponent,
    AllEmployeesComponent,
    EmployeeComponent,
    AdddepartmentComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
