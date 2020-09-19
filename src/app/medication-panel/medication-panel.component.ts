import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-medication-panel',
  templateUrl: './medication-panel.component.html',
  styleUrls: ['./medication-panel.component.css']
})
export class MedicationPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['name', 'reason', 'dose', 'prescribedBy', 'issues', 'priority'];

  ngOnInit(): void {
  }

}
