import {
  Component,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';
import {
  Employee
} from '../models/employee';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private _employeeId:number;

  @Input() 
 set employeeId(val : number) {
    this._employeeId = val;
  }
  
  get employeeId() : number {
    return this._employeeId;
  }
  
  

  private _employee:Employee;

  @Input() 
  set employee(val: Employee){
    this._employee=val;
  };

  get employee(){
    return this._employee
  }

 
  constructor() {}

  ngOnInit(): void {}
  

  //   ngOnChanges(changes: SimpleChanges){
  // const previousEmployee=<Employee>changes.employee.previousValue;
  // const currentEmployee=<Employee>changes.employee.currentValue;
  // console.log('Previous :' +(previousEmployee?previousEmployee.name:'NULL'))
  // console.log('Current :' +currentEmployee.name)

  //   }
}
