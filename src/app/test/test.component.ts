import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log('Test Component ngOnInit Hit');
  }

  ngOnDestroy(): void {
    console.log('Test Component ngOnDestroy Hit');
  }
}
