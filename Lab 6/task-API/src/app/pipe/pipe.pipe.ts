import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value.toUpperCase();
  }

}
