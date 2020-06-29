import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})
export class InactiveDiagnosisPanelComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  displayedColumns = ['checked', 'name', 'rxfilter', 'trend', 'date'];


  ngOnInit(): void {
  }

}
