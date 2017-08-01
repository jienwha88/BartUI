import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'platform'
})

export class FilterPipe implements PipeTransform{
  transform(value: any, num: number): any {
    return value.filter(etd => etd.estimate[0].platform == num);
  }

}
