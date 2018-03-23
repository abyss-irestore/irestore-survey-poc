import {Component, OnChanges, OnInit} from '@angular/core';
import {MapsService} from "./maps.service";
import {ChildComponent} from "../child-component";



@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, ChildComponent {

    lng: number = -108.12988;
    lat: number = 40.60326;

    data = null;
    geoJsonObject : Object;


    constructor(private mapsService: MapsService) {
    }

    ngOnInit() {
        this.mapsService.getGeoJson(this.data)
            .then(data => {
                const {geometry = {}} = data.features[0] || {},
                    {coordinates = []} = geometry,
                    coords = Array.isArray(coordinates[0]) ? coordinates[0] : coordinates;

                this.lng = coords[0];
                this.lat = coords[1];

                this.geoJsonObject = data;
            })
            .catch(console.log);
    }


}