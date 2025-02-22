import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
    
}
