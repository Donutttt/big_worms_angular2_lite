import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'location-map',
  template: `
    <div class="location-map-wrapper">
        <iframe
          frameborder="0" style="border:0"
          [src]="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDM_exFaOx693tTRzfVzn30Fo77SsrzMwY&q=' + searchTerm | safe">
        </iframe>
        <p class="location-map-toggle">Show more</p>
    </div>
  `,
  styles: [`
    iframe{
        width: 90%;
        height: 300px;

        margin: 0 auto;
    }
    .location-map-wrapper{
        width: 100%;
        text-align: center;

        padding: 1em;
    }
  `]
})
export class LocationMap implements OnInit{
  @Input() searchTerm: string = 'Spiceball Park Banbury';

  fullMapUrl: string;

  ngOnInit(){
    console.log('map init');
    this.fullMapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDM_exFaOx693tTRzfVzn30Fo77SsrzMwY&q' + this.searchTerm;
    console.log(this.fullMapUrl);
  }
}
