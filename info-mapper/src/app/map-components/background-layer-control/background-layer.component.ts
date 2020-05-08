import { Component, Input }  from '@angular/core';

@Component({
  selector: 'background-layer-component',
  styleUrls: ['./background-layer.component.css'],
  templateUrl:'./background-layer.component.html'
})
export class BackgroundLayerComponent {
    // Information about the background layer provided in the configuration file.
    // Initialized in map.component.ts
    data: any;
    // The reference to the map component
    // Initialized in map.component.ts
    mapComponentReference: any;
    // Indicates whether or not the current background layer is selected
    checked: boolean = false;

    selectBackgroundLayer() {
      this.mapComponentReference.selectBackgroundLayer(this.data.geoLayerId);
    }
}