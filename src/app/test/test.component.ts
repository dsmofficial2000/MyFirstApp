import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements DoCheck{
  @Input() user: any;

  private Previoususername: string = '';
  ngDoCheck(): void {
    if(this.user.name != this.Previoususername) {
      this.Previoususername = this.user.name;
      console.log('ngDoCheck is called and user name is changed', this.user.name);
    }
  }
}
