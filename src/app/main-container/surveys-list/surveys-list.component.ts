import {Component, OnInit} from '@angular/core';
import {ChildComponent} from "../child-component";
import {SurveysService} from "./surveys.service";

@Component({
    selector: 'app-surveys-list',
    templateUrl: './surveys-list.component.html',
    styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit, ChildComponent {
    data: any;
    surveys: Array<any> = [{}];
    selectedSurvey = null;
    center = '';
    path = [];

    private columns: Array<String> = ["Survey", "Inspector", "Town", "Leak", "Date", "Start Time", "End Time", "Distance Travelled"];

    constructor(private surveysService: SurveysService) {
    }

    ngOnInit() {
        this.surveysService.getSurveys()
            .then((surveys: Array<any>) => {
                this.surveys = surveys;
            })
    }

    selectSurvey(index) {
        this.selectedSurvey = this.surveys && this.surveys.length ? this.surveys[index] : null;

        let firstCoords = this.selectedSurvey.geoData.features[0].geometry.coordinates[0];
        this.center = firstCoords.reverse().toString();

        this.path = this.selectedSurvey.geoData.features[0].geometry.coordinates
            .map(c => ({lng: c[0], lat: c[1]}));
    }

}
