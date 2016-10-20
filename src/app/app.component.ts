import {Component, OnInit} from '@angular/core';

import { TrainingDate } from './training-date';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [`

    `]
})

export class AppComponent implements OnInit {
    trainingDates: [TrainingDate] = [
      new TrainingDate(0,14,0, 'Spiceball Park'),
      new TrainingDate(1,18,30, 'The Warriner School')
    ];

    testTDate: TrainingDate = new TrainingDate(1,1,1,'Test');

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
