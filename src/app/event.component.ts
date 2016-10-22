import { Component, Input } from '@angular/core';

import { Event } from './event';

@Component({
    selector: 'event',
    template: `
        <p>{{ event.location }}</p>
    `
})
export class EventComponent{
    @Input() event: Event;
}
