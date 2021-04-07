import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import moment from 'moment';
import { DataService } from '../services/data.service';
import { GoalsDataService } from '../services/goals-data-service.service';

@Component({
  selector: 'app-target-values',
  templateUrl: './target-values.component.html',
  styleUrls: ['./target-values.component.css']
})
export class TargetValuesComponent implements OnInit {
  targetValuesDataSource: any;

  constructor(public dataservice: DataService, public goalsdataservice: GoalsDataService) {

  }

  displayedColumns = ['measure', 'mostRecentResult', 'date', 'target'];
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.targetValuesDataSource = this.dataservice.targetValuesDataSource;
    this.targetValuesDataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'date': return moment(item[property]).unix();
        default: return item[property];
      }
    };
  }

  ngAfterViewInit() {
    this.targetValuesDataSource.sort = this.sort;
  }
  refreshTargets = () => {
    this.targetValuesDataSource = this.dataservice.targetValuesDataSource;
  }

}
