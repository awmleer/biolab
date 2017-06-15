import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash"

@Pipe({
    name: 'filter',
    pure:false
})
export class FilterPipe implements PipeTransform {
    transform(arr: any[],matchObject): any[] {
        return _.filter(arr,matchObject);
    }
}



@Pipe({
    name: 'fuzzyFilter',
    pure:false
})
export class FuzzyFilterPipe implements PipeTransform {
    transform(arr: any[],matchObject): any[] {
        return _.filter(arr,function (o) {
            for (let key in matchObject) {
                if (o[key].indexOf(matchObject[key])==-1)return false;
            }
            return true;
        });
    }
}
