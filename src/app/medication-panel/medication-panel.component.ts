import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-medication-panel',
  templateUrl: './medication-panel.component.html',
  styleUrls: ['./medication-panel.component.css']
})
export class MedicationPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['name', 'classortype', 'dose', 'doseForm', 'prescribedBy', 'startDate', 'adverseReactions'];

  ngOnInit(): void {
  }

}
