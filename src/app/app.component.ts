import {Component, OnInit} from '@angular/core'

import { TrainingDate } from './training-date';
import { TrainingDateService } from './training-date.service';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [`
        .training-row{
          margin-bottom: 2em;
          background-color: #e3e3e3;
        }
    `],
    providers: [
      TrainingDateService
    ]
})

export class AppComponent implements OnInit {
    trainingDates: TrainingDate[];

    // [
    //   new TrainingDate(0,14,0, 'Spiceball Park'),
    //   new TrainingDate(1,18,30, 'The Warriner School')
    // ];

    events: [Event] = [
      new Event('Test Event', new Date(2016, 12, 25))
    ];

    testTDate: TrainingDate = new TrainingDate(1,1,1,'Test');

    constructor(private trainingDateService: TrainingDateService){
      this.loadDates();
      console.log('training dates:');
      console.dir(JSON.stringify(this.trainingDates));
    }

    loadDates(): void{
        this.trainingDateService.getDates()
            .subscribe(dates => this.trainingDates = dates,
                       err => {
                         console.log(err);
                       });
    }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
