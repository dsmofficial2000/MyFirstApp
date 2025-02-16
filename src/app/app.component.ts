import { AfterContentInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit{
  displayfromParent = '';

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is invoked...');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() *10);
    this.displayfromParent = 'Random Number: ' + random;  
  }
}
