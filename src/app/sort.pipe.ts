import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): unknown {

    if ( value.length === 0 ) {
      return value;
    }

    value.sort((a, b) => {
      const nameA = a[propName].toUpperCase(); // ignore upper and lowercase
      const nameB = b[propName].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return value;
  }

}
