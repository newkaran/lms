import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveDetails } from 'src/app/common/LeaveDetails';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css']
})
export class LeaveApprovalComponent implements OnInit {

  constructor(private cmnservice:CommonService,private actRoute:ActivatedRoute,private router:Router) { }
  employeeID:string;
  leaveDetails:LeaveDetails;
  leaveID:string;
  managerID:string;
  ngOnInit() {
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.leaveID = this.actRoute.snapshot.params['leaveID']; 
    this.managerID = this.actRoute.snapshot.params['managerID']; 
    this.cmnservice.getEmployeeLeaveDetails(this.leaveID).subscribe(value=>this.leaveDetails=value)
  }
  approveLeaveForm = new FormGroup({
    leaveComments:new FormControl(null,[])
  })

  approveLeave (data) {
   //this.router.navigate(['/employeeID',this.employeeID,this.managerID]);
  }

}
