import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: string[] = [];

  formData = {
    id: '',
    name: '',
    dept: '',
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  save(form: any): void {
    if (form.valid) {
      this.employeeService.saveEmployees(
        parseInt(this.formData.id),
        this.formData.name,
        this.formData.dept
      );
      this.employees = this.employeeService.getEmployees();
    }
  }
}
