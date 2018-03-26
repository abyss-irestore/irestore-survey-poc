import { Component, OnInit } from '@angular/core';
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
  objectKeys = Object.keys;

  private columns : Array<String> = ["Survey", "Inspector", "Town", "Leak", "Date", "Start Time", "End Time", "Distance Travelled"];

  constructor(private surveysService: SurveysService) { }

  ngOnInit() {
    this.surveysService.getSurveys().then((surveys: Array<any>) =>  this.surveys = surveys )
  }

  isDate(date){
    return date instanceof Date;
  }

}
