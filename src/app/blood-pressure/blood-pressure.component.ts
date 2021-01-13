import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UacrTableData} from '../datamodel/uacr';
import {reformatYYYYMMDD} from '../util/utility-functions';
import {VitalSignsTableData} from '../datamodel/vitalSigns';

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
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
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

        case ('date' ): {
          return reformatYYYYMMDD(data.date);
        }

        default: {
          return data[header];
        }
      }
    };
    const sortState: Sort = {active: 'date', direction: 'desc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);

  }


  refreshVitalSigns = () => {
    this.vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
  }

}
