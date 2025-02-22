import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(TestComponent) testcomp?: (TestComponent);

  incrementFromChildComponent(): void {
    console.log('test component works', this.testcomp);
    this.testcomp?.increment();
  }
}
