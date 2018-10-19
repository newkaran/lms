import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';
import { Employee } from 'src/app/common/Employee';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private cmnservice:CommonService) { }
  employeeID:string;
  managerID:string;
  empDetails:Employee;
  ngOnInit() {
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.managerID =  this.actRoute.snapshot.params['managerID']; 

    this.cmnservice.getEmployeeDetails(this.managerID).subscribe(value=>this.empDetails=value)
  }

}
