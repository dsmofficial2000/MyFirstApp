import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
})
export class HighlightElementDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;

  colorArray = [
    '#e94b3cff',
    '#2d2926ff',
    '#2a3132',
    '#343148ff',
    '#07575b',
    '#021c1e',
    '#2a2f33',
    '#1e1f26'
  ];

  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    console.log('Test');
    this.textColor = '#101820ff';
  }

  @HostListener('click') onToggle(){
    this.setRandomColor();
  }

  private setRandomColor(){
    const colorPick = Math.floor(Math.random()* this.colorArray.length);

    if(this.bgColor !== this.colorArray[colorPick]){
      this.bgColor = this.colorArray[colorPick];
      this.textColor = '#ccc';
    }else{
      this.setRandomColor();
    }
  }
}
