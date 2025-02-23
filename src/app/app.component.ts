import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendTextPipe } from './append-text.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppendTextPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pi : number = 21.212324;
}
