import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges{
  @Input() inputValue : string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from ngOnChange Test Component');
    console.log('changes: ', changes);
  }
}
