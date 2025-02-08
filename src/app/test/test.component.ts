import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name : string = "";
  title = 'Durgesh';
  msg = 'Hello , Welcome to app component `page';
  inputVal = 'ABC Test';
  isDisabled = true;
  imgSrc = 'assets/images.png';

  a = 10;
  b = 20;
  ans = this.a + this.b;
}
