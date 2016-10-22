import {Component, OnInit} from '@angular/core'

import { TrainingDate } from './training-date';
import { Event } from './event';

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

    events: [Event] = [
      new Event('Test Event', new Date(2016, 12, 25))
    ];

    testTDate: TrainingDate = new TrainingDate(1,1,1,'Test');

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
