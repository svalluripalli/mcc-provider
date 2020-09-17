import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-active-diagnosis-panel',
  templateUrl: './active-diagnosis-panel.component.html',
  styleUrls: ['./active-diagnosis-panel.component.css']
})
export class ActiveDiagnosisPanelComponent implements OnInit {

  constructor(public dataservice: DataService) { }
  displayedColumns = ['checked', 'name', 'rxfilter', 'trend', 'date'];
  /* dataSource = DIAGNOISIS_DATA; */
      ngOnInit(): void {
  }

}
/*
export interface Diagnosis {
  checked: boolean;
  name: string;
  date: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const DIAGNOISIS_DATA: Diagnosis[] = [
  {checked: false, name: 'Chronic Kidney Disease', date: '04/26/2015' },
  {checked: false, name: 'Diabetes', date: '12/13/2015' }
]
*/
