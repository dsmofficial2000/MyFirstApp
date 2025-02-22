import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TestComponent) testcomp?: (TestComponent);
  @ViewChild('btnRef') btnRef? : ElementRef<HTMLButtonElement>;

  incrementFromChildComponent(): void {
    console.log('test component works', this.testcomp);
    this.testcomp?.increment();
  }

  // ElementRef is used to DEAL with DOM element
  // When dealing with DOM manipulation it is always better 
  // practice to execute such a code in side the ngAfterViewInit hook
  ngAfterViewInit(): void {
    if(this.btnRef?.nativeElement){
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
}
