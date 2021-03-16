import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

declare var window: any;

@Component({
  selector: 'app-maintenance-and-interventions',
  templateUrl: './maintenance-and-interventions.component.html',
  styleUrls: ['./maintenance-and-interventions.component.css']
})
export class MaintenanceAndInterventionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getEducationIsReady(): boolean {
    return window[Constants.EducationIsLoaded];
  }
}
