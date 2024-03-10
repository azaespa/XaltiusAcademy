import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() {
    this.employees.push(new Employee(1, 'Rob', 'CSE'));
    this.employees.push(new Employee(2, 'Pej', 'CSE'));
  }

  getEmployees(): string[] {
    let result: string[] = [];
    this.employees.forEach((e) =>
      result.push(`[${e.id}, ${e.name}, ${e.dept}]`)
    );

    return result;
  }

  saveEmployees(id: number, name: string, dept: string): void {
    for (let emp of this.employees) {
      if (id === emp.id) {
        alert('Duplicate id.');
        return;
      }
    }

    this.employees.push(new Employee(id, name, dept));
  }
}

class Employee {
  id: number;
  name: string;
  dept: string;

  constructor(_id: number, _name: string, _dept: string) {
    this.id = _id;
    this.name = _name;
    this.dept = _dept;
  }
}
