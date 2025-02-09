import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular 17
interface emplist{
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
  display: boolean = false;

  displayelement: boolean = false;

  num: number = -20;

  show() {
    this.display = !this.display;
  }

  // Angular 17
  showEmpList : boolean = false;
  employees = <emplist[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Marketing' },
  ]);

  ToggleEmployee() {
    this.showEmpList = !this.showEmpList;
  }
  
}