import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {DataService} from './data.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(public dataservice: DataService) {
  }

  title = 'providersmartapp';
  events: string[] = [];
  opened: boolean;
  apiURL: string;
  // currentSubjectId = 'cc-pat-betsy';
  // currentCarePlanId = 'cc-careplan-betsy-ckd';
  currentSubjectId = '';
  currentCarePlanId = '';

  ngOnInit(): void {
    // todo:  patient selector
    this.dataservice.setCurrentSubject(this.currentSubjectId);
    this.dataservice.setCurrentCarePlan(this.currentCarePlanId);
    this.apiURL = environment.mccapiUrl;
  }

}
