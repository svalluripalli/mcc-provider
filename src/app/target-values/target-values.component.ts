import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {GoalsDataService} from '../goals-data-service.service';

@Component({
  selector: 'app-target-values',
  templateUrl: './target-values.component.html',
  styleUrls: ['./target-values.component.css']
})
export class TargetValuesComponent implements OnInit {

  targetValuesDataSource = this.dataservice.targetValuesDataSource;
  constructor(public dataservice: DataService, public goalsdataservice: GoalsDataService) {

 }

  displayedColumns = ['measure', 'mostRecentResult', 'date', 'target'];

  ngOnInit(): void {

  }

  refreshTargets = () => {
    this.targetValuesDataSource = this.dataservice.targetValuesDataSource;
  }

}
