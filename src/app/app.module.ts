import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { RetrieveLeavesComponent } from './retrieve-leaves/retrieve-leaves.component';
import { PendingLeaveApprovalsComponent } from './pending-leave-approvals/pending-leave-approvals.component';
import { FilterPipe } from 'src/app/common/FilterPipe';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';

const routes:Routes=[
{path:"",redirectTo:"employees",pathMatch:"full"},
{path:"employees", component:EmployeeListComponent},
{path:"login/:id/:managerID", component:LoginComponent},
{path:"employeeID/:employeeID/:managerID",component:EmployeeDashboardComponent},
{path:"applyLeave/:employeeID/:managerID",component:LeaveApplicationComponent},
{path:"approveDenyLeave/:leaveID",component:LeaveApprovalComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    ManagerDetailsComponent,
    EmployeeDetailsComponent,
    LeaveApplicationComponent,
    RetrieveLeavesComponent,
    PendingLeaveApprovalsComponent,
    FilterPipe,
    LeaveApprovalComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
