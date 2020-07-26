import {
  Component,
  OnInit
}

from '@angular/core';

import {
  Employee
}

from '../models/employee';

import {
  EmployeeService
}

from './employee.service';

@Component({
    selector: 'app-list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
  }

) export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [] ;
  // dataFromChild :Employee;
  // employeeToDisplay: Employee;
  // private arrayIndex = 1;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    // this.employeeToDisplay = this.employees[0];
  }
//   handleNotify(eventData: Employee){
// this.dataFromChild=eventData
//   }
  // nextEmployee(): void {
  //   if (this.arrayIndex < this.employees.length) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1
  //   }
  // }
}
