import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import featureToggling from "../../assets/json/feature-toggling.json";

declare var window: any;

@Component({
  selector: 'app-health-and-social-concerns',
  templateUrl: './health-and-social-concerns.component.html',
  styleUrls: ['./health-and-social-concerns.component.css']
})
export class HealthAndSocialConcernsComponent implements OnInit {
  featureToggling: any = featureToggling;
  
  constructor() { }

  ngOnInit(): void {
  }


  getSocialConcernIsReady(): boolean {
    return window[Constants.SocialConcernsIsLoaded];
  }

}
