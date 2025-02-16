import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements DoCheck{

  ngDoCheck(): void {
    console.log('ngDoCheck is invoked...');
  }
}
