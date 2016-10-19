import { Component, Input } from '@angular/core';

import { TrainingDate } from './training-date';

//TODO: fix this, template doesn't seem to be pulling data correctly
@Component({
  selector: 'training-date',
  template: `
    <div class="training-date-wrapper">
      <h3>{{ trainingDate.location }}</h3>
      <p>{{ trainingDate.dayName }}s at {{ trainingDate.hour }}.{{ trainingDate.minuteString }}</p>
    </div>
  `,
  styles: [`
    .training-date-wrapper{
        background-color: aliceblue;
    }
  `]
})
export class TrainingDateComponent{
    @Input() trainingDate: TrainingDate;
}
