import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Employee {
  name: string;
  state: string;
  salary: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Example of pipe expression';
  Showdate: Date = new Date();

  items = ['ABC', 'DEF', 'GHI', 'JKL'];
  employees: {name: string, state: string, salary: number }[] =[
    {name: 'jason smith', state: 'california', salary: 50000},
    {name: 'anderson brooke', state: 'new york', salary: 75000},
    {name: 'alex costa', state: 'texas', salary: 60000},
    {name: 'sean parker', state: 'pennsylvania', salary: 85000},
  ];

  employees1: Employee[] =[
    {name: 'jason smith', state: 'california', salary: 50000},
    {name: 'anderson brooke', state: 'new york', salary: 75000},
    {name: 'alex costa', state: 'texas', salary: 60000},
    {name: 'sean parker', state: 'pennsylvania', salary: 85000},
  ];
}
