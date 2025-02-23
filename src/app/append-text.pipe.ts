import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText',
  standalone: true
})
export class AppendTextPipe implements PipeTransform {

  transform(a :string, b: string): string {
    return a + b;
  }

}
