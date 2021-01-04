import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-counseling-panel',
  templateUrl: './counseling-panel.component.html',
  styleUrls: ['./counseling-panel.component.css']
})
export class CounselingPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['topic', 'date', 'assessment'];


  ngOnInit(): void {
  }

}
