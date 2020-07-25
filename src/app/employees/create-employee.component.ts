import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import {Department} from '../models/department'
import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id:null,
    name:null,
    gender:null,
    email:null,
    phoneNumber:null,
    contactPreference:null,
    dateOfBirth:null,
    department:'select',
    isActive:null,
    photoPath:null,
    password:null,
    confirmedPassword:null
  }
  
 previewPhoto=false;
  departments: Department [] =[
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Payroll"}
  ]



  constructor(private _employeeService:EmployeeService,
              private _router: Router) { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto
  }
  ngOnInit(): void {
  }

  saveEmployee():void{
    this._employeeService.save(this.employee),
    this._router.navigate(['list'])
  }
}
