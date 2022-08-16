import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArr',
})
export class NumToArrPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number[] {
    return [...Array(value).keys()];
  }
}
