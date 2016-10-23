import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { TrainingDate } from './training-date';

@Injectable()
export class TrainingDateService {

    standardUrl: string = 'https://s3-eu-west-1.amazonaws.com/www.oradini.com/data.json';

    constructor (private http: Http){

    };

    getDates(): Observable<TrainingDate[]>{
        return this.http.get(this.standardUrl)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error) || 'server error');
    }
}
