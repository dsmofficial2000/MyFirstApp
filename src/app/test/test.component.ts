import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements AfterContentInit{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit hook was invoked...');
    console.log('ngAfterContentInit wrapper...', this.wrapper);
    console.log('ngAfterContentInit contentWrapper...', this.content);
  }
  
}
