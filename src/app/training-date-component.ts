import { Component, Input } from '@angular/core';

import { TrainingDate } from './training-date';

let lightBlue:string = '#07a4d7'

@Component({
  selector: 'training-date',
  template: `
    <div class="training-date-wrapper">
      <h3>{{ trainingDate.location }}</h3>
      <p>{{ trainingDate.dayName }}s at {{ trainingDate.hour }}.{{ trainingDate.minuteString }}</p>
      <location-map [searchTerm]="trainingDate.location"></location-map>
    </div>
  `,
  styles: [`
    .training-date-wrapper{
        padding: 0.5em 1em;
        background-color: white;
        margin: 1em;
    }
  `]
})
export class TrainingDateComponent{
    @Input() trainingDate: TrainingDate;
}
