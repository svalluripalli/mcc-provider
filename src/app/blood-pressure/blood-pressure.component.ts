import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit, AfterViewInit {

  vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
  vitalSignsRowMax = 7;

  constructor(public dataservice: DataService) {
  }
  displayedColumns = ['date', 'systolic', 'diastolic'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.vitalSignsDataSource.data.length > this.vitalSignsRowMax) {
      this.vitalSignsDataSource.paginator = this.paginator;
    }
  }


  refreshVitalSigns = () => {
    this.vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
  }

}
