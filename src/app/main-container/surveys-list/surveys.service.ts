import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SurveysService {

    constructor(private http: HttpClient) {
    }

    getSurveys() {
        return new Promise((resolve, reject) => {
            resolve([{
                fullAddress: "130, Elm St., Manchester",
                inspector: "Jeff Smart",
                town: "Manchester",
                leak: 2,
                surveyDate: new Date(),
                startTime: (new Date()).toLocaleString('en-US', { hour: 'numeric', hour12: true }),
                endTime: new Date(Date.now() + 2*60000)
                    .toLocaleString('en-US', { hour: 'numeric', hour12: true }),
                distanceTravelled: "15FT"
            }])
        })
    }

}
