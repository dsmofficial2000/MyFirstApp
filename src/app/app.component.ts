import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Employee {
  name: string;
  state: string;
  salary: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageStartIndex: number = 0;
  pageSize: number = 4;
  endIndex: number = this.pageSize;
  slicedProducts: { name: string; imageUrl: string }[] = [];

  ngOnInit() {
    this.sliceProducts();
  }

  sliceProducts() {
    this.slicedProducts = this.products.slice(this.pageStartIndex, this.endIndex);
  }

  previousPage(): void {
    this.pageStartIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
  }

  nextPage() : void{
    this.pageStartIndex += this.pageSize;
    this.endIndex += this.pageSize;
  }

  previousPage1(): void {
    if (this.pageStartIndex - this.pageSize >= 0) {
      this.pageStartIndex -= this.pageSize;
      this.endIndex -= this.pageSize;
      this.sliceProducts();
    }
  }

  nextPage1(): void {
    if (this.endIndex < this.products.length) {
      this.pageStartIndex += this.pageSize;
      this.endIndex += this.pageSize;
      this.sliceProducts();
    }
  }

  products: { name: string; imageUrl: string }[] = [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: './assets/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: './assets/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: './assets/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React with Interview Questions, eStore Project',
      imageUrl: './assets/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: './assets/RDBMS.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Quesitons',
      imageUrl: './assets/Angular_Course.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: './assets/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: './assets/Python_Course.jpg',
    }
  ];
}
