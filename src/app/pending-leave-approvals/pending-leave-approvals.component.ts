import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';
import { LeaveDetails } from 'src/app/common/LeaveDetails';
import { Employee } from 'src/app/common/Employee';
import { UniqueEmployee } from 'src/app/common/UniqueEmployee';
import { Observable } from 'rxjs/internal/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-pending-leave-approvals',
  templateUrl: './pending-leave-approvals.component.html',
  styleUrls: ['./pending-leave-approvals.component.css']
})
export class PendingLeaveApprovalsComponent implements OnInit {
  setClickedRow : Function;
  employeeID:string;
  approveButtonStatus:boolean;
  public pendingLeaves:LeaveDetails[];
  public uniqueEmployees:LeaveDetails[];
 uniqueEmpLeaveDtls:LeaveDetails[] = [];
 leaveId:string;
 managerID:string;
 
 selectedRow : Number;
 constructor(private cmnservice:CommonService,private router:Router,private actRoute:ActivatedRoute) {
  this.approveButtonStatus = false;
   this.setClickedRow = function(index,leaveID:number){
    this.selectedRow = index;
    this.approveButtonStatus = false;
    this.leaveId=leaveID;
 }
}  
  ngOnInit() {
    this.approveButtonStatus = true;
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.managerID = this.actRoute.snapshot.params['managerID']; 
    this.cmnservice.getPendingApprovals(this.employeeID).subscribe(value=>this.pendingLeaves=value);
    this.cmnservice.getUniqueEmployee(this.employeeID).subscribe(value=>this.uniqueEmployees=value);
 }

  approveLeaves(){
    this.router.navigate(['/approveDenyLeave',this.leaveId])
  }
  


}


