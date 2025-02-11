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
  colorval = 'navy';
  fontSize = '30px';
  isItalic = 'italic';
}
