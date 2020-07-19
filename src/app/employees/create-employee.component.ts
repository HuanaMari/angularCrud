import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import {Department} from '../models/department'
import { Employee } from '../models/employee';

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
    department:null,
    isActive:null,
    photoPath:null
  }
  
 previewPhoto=false;
  departments: Department [] =[
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Payroll"}
  ]



  constructor() { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto
  }
  ngOnInit(): void {
  }

  saveEmployee(newEmployee: Employee):void{
    console.log(newEmployee);
  }
}
