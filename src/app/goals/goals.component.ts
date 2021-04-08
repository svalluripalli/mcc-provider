import { Component, OnInit } from '@angular/core';
import featureToggling from "../../assets/json/feature-toggling.json";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  featureToggling: any = featureToggling;
  
  constructor() { }

  ngOnInit(): void {
  }

}
