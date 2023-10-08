import { Pipe, PipeTransform } from '@angular/core';
import { Poducts } from 'src/app/interfaces/poducts';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Poducts[] , term:string ):Poducts[]
  {
    return products.filter(  (item)=> item.title.toLowerCase().includes(term.toLowerCase())  );
  }

}
