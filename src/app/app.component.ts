import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  displayTestComponent : boolean = true;

  toggle(){
    this.displayTestComponent = !this.displayTestComponent;
  }
  
  ngOnInit(): void {
    console.log('app Component ngOnInit Hit');
  }
  ngOnDestroy(): void {
    console.log('app Component ngOnDestroy Hit');
  }
}
