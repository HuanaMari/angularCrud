import {
  Component,
  OnInit,
  Input,
  // OnChanges,
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
