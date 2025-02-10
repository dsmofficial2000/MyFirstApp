import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular 17
interface Employee{
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  employeeRole: string = '';

  employees: Employee[] = [
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Marketing' },
    { id: 6, name: 'EmployeeF', role: 'Marketing' },
    { id: 7, name: 'EmployeeG', role: 'Developer' },
    { id: 8, name: 'EmployeeH', role: 'Developer' },
    { id: 9, name: 'EmployeeI', role: 'Analyst' },
    { id: 10, name: 'EmployeeJ', role: 'Analyst' },
  ];
  
}