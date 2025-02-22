import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, viewChild, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
