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
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted : boolean = false;
  showHeading : boolean = true;
  qualification = [{school: '', degree: '', year: ''}];

  addQualification(){
    this.qualification.push({school: '', degree: '', year:''});
  }

  submit(){
    this.submitted = true;
    this.showHeading = false;
  }

  edit(){
    this.submitted = false;
    this.showHeading = true;
  }

}
