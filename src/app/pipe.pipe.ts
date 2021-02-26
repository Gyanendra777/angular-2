import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, surchturm: any): any {
    // debugger
    // if is not run function 
    if (value.length === 0) {
      return value
    }
    return value.filter(function (param) {
      return param.name.toLowerCase().indexOf(surchturm.toLowerCase() ) > -1
    
    })
  }

}
