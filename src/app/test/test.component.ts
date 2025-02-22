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
export class TestComponent implements AfterContentInit{
    
  @ContentChild('showPara') paraRef?: ElementRef;

  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'italic';
    content.style.fontWeight = '350';
    content.style.font = 'italic';
    console.log('this.paraRef: ', this.paraRef);
  }
}
