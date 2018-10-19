import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/common/Employee';
import { LeaveDetails } from 'src/app/common/LeaveDetails';
import { UniqueEmployee } from 'src/app/common/UniqueEmployee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }
  getEmployeeDetails(employeeID:string):Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:3000/employees/'+employeeID);
  }
  getLeaveApplied(employeeID:string):Observable<LeaveDetails[]> {
    return this.httpClient.get<LeaveDetails[]>('http://localhost:3000/leave?empID='+employeeID);
  }
  getPendingApprovals(employeeID:string):Observable<LeaveDetails[]> {
    return this.httpClient.get<LeaveDetails[]>('http://localhost:3000/leaves?empManagerID='+employeeID);
  }
  getUniqueEmployee(employeeID:string):Observable<LeaveDetails[]> {
    return this.httpClient.get<LeaveDetails[]>('http://localhost:3000/leave?empManagerID='+employeeID);
  }
  
  saveAppliedLeave(leaveDetails:LeaveDetails) {
    alert("inside saveapplied");
    console.log(leaveDetails);
    this.httpClient.post("http://localhost:3000/leave",leaveDetails).subscribe(
      data=>{console.log("Record Inserted Successfully...",data)},
      err=>{console.log("Error While Insertion", err)}

    );
  } 
  getEmployeeLeaveDetails(leaveID:string):Observable<LeaveDetails> {
    return this.httpClient.get<LeaveDetails>('http://localhost:3000/leave/'+leaveID);
  }

}
