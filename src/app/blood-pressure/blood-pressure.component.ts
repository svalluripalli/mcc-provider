import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { reformatYYYYMMDD } from '../util/utility-functions';
import { VitalSignsTableData } from '../datamodel/vitalSigns';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit, AfterViewInit {

  vitalSignsDataSource: MatTableDataSource<VitalSignsTableData>;
  vitalSignsRowMax = 7;

  constructor(public dataservice: DataService) {
  }

  displayedColumns = ['date', 'systolic', 'diastolic'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.vitalSignsDataSource.data.length > this.vitalSignsRowMax) {
      this.vitalSignsDataSource.paginator = this.paginator;
    }
    this.vitalSignsDataSource.sort = this.sort;
    this.vitalSignsDataSource.sortingDataAccessor = (data: VitalSignsTableData, header: string) => {
      switch (header) {
        case ('systolic'): {
          return data.systolic;
        }
        case ('diastolic'): {
          return data.diastolic;
        }
        case ('date'): {
          return moment(data[header]).unix();
        }
        default: {
          return data[header];
        }
      }
    };
  }


  refreshVitalSigns = () => {
    this.vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
  }

}
