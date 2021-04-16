import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { WotTableData } from '../datamodel/weight-over-time';
import { formatWotResult, reformatYYYYMMDD } from '../util/utility-functions';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-weight-over-time',
  templateUrl: './weight-over-time.component.html',
  styleUrls: ['./weight-over-time.component.css']
})


export class WeightOverTimeComponent implements OnInit, AfterViewInit {
  wotDataSource: MatTableDataSource<WotTableData>;
  wotRowMax = 7;

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [pluginAnnotations];
  lineChartType = 'line';

  constructor(public dataservice: DataService) {

  }

  displayedColumns = ['date', 'result'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.wotDataSource = this.dataservice.wotDataSource;
  }
  ngAfterViewInit(): void {
    if (this.wotDataSource.data.length > this.wotRowMax) {
      this.wotDataSource.paginator = this.paginator;
    }
    this.wotDataSource.sort = this.sort;
    this.wotDataSource.sortingDataAccessor = (data: WotTableData, header: string) => {
      switch (header) {
        case ('result'): {
          return data.value;
        }
        case ('date'): {
          return moment(data.date).unix();
        }
        default: {
          return data[header];
        }
      }
    };
  }

  WotResult(wot: WotTableData): string {
    return formatWotResult(wot.value, wot.unit);
  }

  getWotRowCssClass(wot: WotTableData): string {
    let cssClass = '';
    const val = wot.value;
    if (val) {
      switch (true) {
        case (val >= 200):
          cssClass = 'resultCritical';
          break;
        case (val < 200 && val >= 105):
          cssClass = 'resultBorderline';
          break;
        case (val < 105):
          cssClass = 'resultGood';
          break;
        default:
          break;
      }
    }
    return cssClass;
  }
}
