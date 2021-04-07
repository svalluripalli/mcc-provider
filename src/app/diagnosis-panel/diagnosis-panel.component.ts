import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import featureToggling from "../../assets/json/feature-toggling.json";

declare var window: any;

@Component({
  selector: 'app-diagnosis-panel',
  templateUrl: './diagnosis-panel.component.html',
  styleUrls: ['./diagnosis-panel.component.css']
})
export class DiagnosisPanelComponent implements OnInit {
  featureToggling: any = featureToggling;
  
  constructor() { }

  ngOnInit(): void {
  }

  getActiveIsReady(): boolean {
    return window[Constants.ActiveDiagnosisIsLoaded];
  }

  getInActiveIsReady(): boolean {
    return window[Constants.InActiveDiagnosisIsLoaded];
  }
}
