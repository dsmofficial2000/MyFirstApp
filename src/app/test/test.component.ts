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
  @Input() inputValue: string = '';
  previousVal: string | undefined;
  currentVal: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputValue']){
      this.previousVal = changes['inputValue'].previousValue;
      this.currentVal = changes['inputValue'].currentValue;
      console.log(changes);
    }
  }
}
