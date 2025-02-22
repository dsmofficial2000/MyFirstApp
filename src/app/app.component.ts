import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  @ViewChild('colorInput') colorInput!: ElementRef;

  @HostBinding('style.backgroundColor') selectedColor!: string;

  @HostListener('input', ['$event.target.value']) onColorChange(color: string){
    this.selectedColor = color;
  }

  ngAfterViewInit(): void {
    this.selectedColor = this.colorInput.nativeElement.value;
  }
}
