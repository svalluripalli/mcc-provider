import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-referral-panel',
  templateUrl: './referral-panel.component.html',
  styleUrls: ['./referral-panel.component.css']
})
export class ReferralPanelComponent implements OnInit {
  constructor(public dataService: DataService) { }
  displayedColumns = ['topic', 'date', 'assessment'];



  ngOnInit(): void {
  }

}
