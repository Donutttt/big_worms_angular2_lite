import { Component, Input } from '@angular/core';

@Component({
  selector: 'location-map',
  template: `
    <iframe
      width="600"
      height="450"
      frameborder="0" style="border:0"
      src="{{searchTerm}}">
    </iframe>
  `
})
export class LocationMap{
  @Input() searchTerm: string = 'Spiceball Park Banbury';
}
