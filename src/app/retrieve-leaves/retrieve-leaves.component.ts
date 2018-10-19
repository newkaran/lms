import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveDetails } from 'src/app/common/LeaveDetails';

@Component({
  selector: 'app-retrieve-leaves',
  templateUrl: './retrieve-leaves.component.html',
  styleUrls: ['./retrieve-leaves.component.css']
})
export class RetrieveLeavesComponent implements OnInit {

  constructor(private cmnservice:CommonService,private actRoute:ActivatedRoute) { }
  employeeID:string;
  managerID:string;
  leaveDetails:LeaveDetails[];

  ngOnInit() {
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.managerID = this.actRoute.snapshot.params['managerID']; 
    this.cmnservice.getLeaveApplied(this.employeeID).subscribe(value=>this.leaveDetails=value)
  }

}
