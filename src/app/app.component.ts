import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit{
  itemArr: string[] = ['Item 1','Item 2','Item 3'];
  
  ngOnInit(): void {
    console.log('Parent Component initialized');
  }

  addItem() {
    const newItem = `Item ${this.itemArr.length + 1}`
    this.itemArr.push(newItem)
  }

  deleteItem(index: number) {
    if(index >= 0 && this.itemArr.length){
      this.itemArr.splice(index, 1);
    }
  }
}
