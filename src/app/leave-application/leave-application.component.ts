import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LeaveDetails } from 'src/app/common/LeaveDetails';
import { Employee } from 'src/app/common/Employee';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private cmnservice:CommonService,private router:Router) { }
  employeeID:string;
  managerID:string;
  numofDays:number;
  leaveDetails:LeaveDetails;
  leaveID:any;
  employeeDetails:Employee;
  ngOnInit() {
    this.employeeID = this.actRoute.snapshot.params['employeeID']; 
    this.managerID = this.actRoute.snapshot.params['managerID'];     
  }

  applyLeaveForm = new FormGroup({
    startDate:new FormControl(null,[Validators.required]),
    endDate:new FormControl(null,[Validators.required]),
    numofDays:new FormControl(null,[Validators.required]),
    leaveType:new FormControl(null,[Validators.required]),
    leaveReason:new FormControl(null,[])
  })

  submitLeave (data) {   

  if(this.applyLeaveForm.value.startDate != null && this.applyLeaveForm.value.endDate != null && this.numofDays != null && this.applyLeaveForm.value.leaveType != null){
    
    this.cmnservice.getEmployeeDetails(this.employeeID).subscribe(value=>{ this.employeeDetails=value
        this.leaveID=Math.floor(Math.random() * 100) + 10 ;
         
        this.leaveDetails={
          id:this.leaveID,
          leaveBalance:"",
          empID:this.employeeID,
          numOfDays:this.applyLeaveForm.value.numOfDays,
          startDate:this.applyLeaveForm.value.startDate,
          endDate:this.applyLeaveForm.value.endDate,
          leaveType:this.applyLeaveForm.value.leaveType,
          status:"Pending Approval",
          reason:this.applyLeaveForm.value.reason,
          managerComments:"",
          appliedOn:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
          empManagerID:this.managerID,
          empName:this.employeeDetails.empName
        }
        console.log(this.leaveDetails);
        this.cmnservice.saveAppliedLeave(this.leaveDetails); 
      });
    this.router.navigate(['/employeeID',this.employeeID,this.managerID]);
    }
  }

  calculateDays(){
      let strtDate=new Date(this.applyLeaveForm.value.startDate);
      let endDate= new Date(this.applyLeaveForm.value.endDate);
      let todaysDate=new Date();

      if(strtDate<todaysDate){
        alert('Start Date Should not be greater than today s Date');
        return;
      }else{
        if(strtDate>endDate){
          alert('End Date should be greater than Start Date');
          return;
        }else{
          this.numofDays = (endDate.getDate()-strtDate.getDate())+1;
        }
      }
  }
}
