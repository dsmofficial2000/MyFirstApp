import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses: {id: number; name: string}[] = [
    {id: 1, name: 'JavaScript - Marathon Interview Questions Series'},
    {id: 2, name: 'Mastering React With Interview Questions, eStore Project'},
    {id: 3, name: 'Mastering TypeScript With Marathon Interview Questions'},
    {id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions'}
  ];

}
