import { Component, Input } from '@angular/core';

import { TrainingDate } from './training-date';

//TODO: fix this, template doesn't seem to be pulling data correctly
@Component({
  selector: 'training-date',
  template: `
    <p>Training date component:</p>
    <p>{{ trainingDate.location }}</p>
  `
})
export class TrainingDateComponent{
    @Input() trainingDate: TrainingDate;
}
