import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-clinical-goals',
  templateUrl: './clinical-goals.component.html',
  styleUrls: ['./clinical-goals.component.css']
})
export class ClinicalGoalsComponent implements OnInit {

  constructor(public dataservice: DataService) { }
  displayedColumns = ['rank', 'description'];
  ngOnInit(): void {
  }

}
