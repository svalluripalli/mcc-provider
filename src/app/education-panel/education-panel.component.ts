import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-education-panel',
  templateUrl: './education-panel.component.html',
  styleUrls: ['./education-panel.component.css']
})
export class EducationPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['topic', 'type', 'outcome', 'status'];

  ngOnInit(): void {
  }

}
