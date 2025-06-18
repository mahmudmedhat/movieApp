import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votePercent'
})
export class VotePercentPipe implements PipeTransform {

transform(value: number):string {
const percentage=Math.round(value*10);
return `${percentage}%`
}

}
