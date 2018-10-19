import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/common/Employee';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private cmnservice:CommonService) { }
  employeeID:string;
  employeeDetails:Employee;
  ngOnInit() {
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.cmnservice.getEmployeeDetails(this.employeeID).subscribe(value=>this.employeeDetails=value)
  }

}
