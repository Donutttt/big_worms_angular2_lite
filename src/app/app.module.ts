import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';

import { TrainingDateComponent } from './training-date-component';

@NgModule({
    declarations: [
        AppComponent,
        TrainingDateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
