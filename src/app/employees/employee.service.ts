import {
  Injectable
} from '@angular/core';
import {
  Employee
} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [{
      id: 1,
      name: 'Mark',
      gender: 'male',
      email: 'mark@gmail.com',
      phoneNumber: 1234687,

      contactPreference: 'Email',
      dateOfBirth: new Date("1976-02-5"),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/1200px-Google_Contacts_icon.svg.png',
      password: '',
      confirmedPassword: ''
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'female',
      email: 'mary@gmail.com',
      phoneNumber: 1234687,
      contactPreference: 'Email',
      dateOfBirth: new Date("1988-01-22"),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/1200px-Google_Contacts_icon.svg.png',
      password: '',
      confirmedPassword: ''
    },
    {
      id: 3,
      name: 'Jovan',
      gender: 'male',
      email: 'jovceark@gmail.com',
      phoneNumber: 1234687,

      contactPreference: 'Email',
      dateOfBirth: new Date("1987-12-29"),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/1200px-Google_Contacts_icon.svg.png',
      password: '',
      confirmedPassword: ''
    }
  ]
  constructor() {}

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
