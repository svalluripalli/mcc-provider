import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  featureToggling: any = Constants.featureToggling;

  constructor() { }

  ngOnInit(): void {
  }

}
