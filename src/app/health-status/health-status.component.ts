import { Component, OnInit } from '@angular/core';
import featureToggling from "../../assets/json/feature-toggling.json";

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {
  featureToggling: any = featureToggling;

  constructor() { }

  ngOnInit(): void {
  }

}
