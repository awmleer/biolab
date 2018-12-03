import {Pipe, PipeTransform} from '@angular/core'
import moment from 'moment';

@Pipe({ name: 'formatToLocal'})
export class FormatToLocalPipe implements PipeTransform{
  transform(val) {
    if(val){
      return moment(val).format();
    }
  }
}
