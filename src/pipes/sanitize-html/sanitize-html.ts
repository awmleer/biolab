import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SanitizeHtmlPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'sanitize-html',
})
export class SanitizeHtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
