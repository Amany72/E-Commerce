import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCut',
  standalone: true,
})
export class TextCutPipe implements PipeTransform {

  transform(text:string , limit:number):string {
    return text.split(' ').slice(0,limit).join(' ');
  }

}
