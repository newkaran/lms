import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private router:Router) { }
  user:string;
  managerID:string;
  employeeID:string;
  ngOnInit() {

    this.user = this.actRoute.snapshot.params['id']; 
    this.managerID = this.actRoute.snapshot.params['managerID']; 
    this.rloginForm.controls["tUname"].setValue(this.user);
  }
  rloginForm = new FormGroup({
    tUname:new FormControl(this.user,[Validators.required,Validators.minLength(3)]),
    tPass:new FormControl(null,[Validators.required])
  })

  loginFunc(data) {
    this.employeeID = data.value.tUname;
    this.router.navigate(['employeeID',this.employeeID,this.managerID]);
  }

}
