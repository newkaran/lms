import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { Employee } from 'src/app/common/Employee';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router:Router,private cmnservice:CommonService) { }
  employeeList:Employee[];
  empID:string;
  ngOnInit() {
    this.cmnservice.getEmployeeList().subscribe(value=>this.employeeList=value)

  }
  //employeeListForm = new FormGroup({  
  //});

  toLogin (data) {
    
      this.router.navigate(['login',this.empID]);
  }

}
