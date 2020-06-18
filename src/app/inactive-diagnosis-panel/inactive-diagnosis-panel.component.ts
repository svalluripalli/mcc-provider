import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})
export class InactiveDiagnosisPanelComponent implements OnInit {

  constructor() { }

  displayedColumns = ['checked', 'name', 'rxfilter', 'trend', 'date'];
  dataSource = DIAGNOISIS_DATA;

  ngOnInit(): void {
  }

}

export interface Diagnosis {
  checked: boolean;
  name: string;
  date: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const DIAGNOISIS_DATA: Diagnosis[] = [
  {checked: false, name: 'Depression', date: '04/26/2015' },
  {checked: false, name: 'Hypertention', date: '12/13/2015' }
]
