
//import { FilterPipe } from '../scripts/hebrewDateFilter';
import { Pipe, PipeTransform } from '@angular/core'
@Pipe({name: 'typesPipe'})
export class TypesPipe {

 //private pipe: FilterPipe
  constructor( ) {
  }
  transform(str:any):string {
    //let pipe: FilterPipe;
    if (isNaN(str) && Date.parse(str))
{
  return "";
  //this.pipe.transform(new Date(str), 'EEEE, hebrewDate dd/MM/yyyy');
}
   
    else
     {
      return "this is not date"
     }

  }
  
}
