import {
  Component,
  OnInit,
  Input
  // SimpleChanges
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
  @Input() employee:Employee;
  // @Output() notify: EventEmitter<Employee>=new EventEmitter<Employee>();
//   private _employee:Employee;
//   private _employeeId:number;
//   @Input() 
//  set employeeId(val : number) {
//     this._employeeId = val;
//   }  
//   get employeeId() : number {
//     return this._employeeId;
//   }
//   @Input() 
//   set employee(val: Employee){
//     this._employee=val;
//   };
//   get employee(){
//     return this._employee
//   }

 
  constructor() {}

  ngOnInit(): void {}

  getEmployeeNameAndGender():string{
    return this.employee.name + " " + this.employee.gender;
  }
  // handleClick(){
  //   this.notify.emit(this.employee)
  // }

  //   ngOnChanges(changes: SimpleChanges){
  // const previousEmployee=<Employee>changes.employee.previousValue;
  // const currentEmployee=<Employee>changes.employee.currentValue;
  // console.log('Previous :' +(previousEmployee?previousEmployee.name:'NULL'))
  // console.log('Current :' +currentEmployee.name)

  //   }
}
