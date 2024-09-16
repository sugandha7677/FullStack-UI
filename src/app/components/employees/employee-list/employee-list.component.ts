import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees:Employee[] = [];
  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void{
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
    },
    error: (response) =>{
      console.log(response);
    }
    })
  }
}
