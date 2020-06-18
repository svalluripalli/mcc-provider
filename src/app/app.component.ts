import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(public dataservice: DataService) { }
  title = 'providersmartapp';
  events: string[] = [];
  opened: boolean;

  ngOnInit(): void {
    this.dataservice.setCurrentSubject('cc-pat-betsy');
    this.dataservice.setCurrentCarePlabn('cc-careplan-betsy-ckd');
  }

}
