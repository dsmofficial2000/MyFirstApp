import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{
  @Input() item: string[] = [];
  @Output() itemDelete = new EventEmitter<number>();
  
  deleteItem(index: number) {
    this.itemDelete.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is Initialized');
  }

  ngOnDestroy(): void {
    console.log('Component is destroy');
  }
}
