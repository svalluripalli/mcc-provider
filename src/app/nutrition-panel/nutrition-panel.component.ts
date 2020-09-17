import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-nutrition-panel',
  templateUrl: './nutrition-panel.component.html',
  styleUrls: ['./nutrition-panel.component.css']
})
export class NutritionPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['topic', 'date', 'assessment'];


  ngOnInit(): void {
  }

}
