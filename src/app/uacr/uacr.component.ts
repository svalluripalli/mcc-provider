import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { UacrTableData } from '../datamodel/uacr';
import { formatUacrResult, reformatYYYYMMDD } from '../util/utility-functions';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-uacr',
  templateUrl: './uacr.component.html',
  styleUrls: ['./uacr.component.css']
})
export class UACRComponent implements OnInit, AfterViewInit {

  uacrDataSource: MatTableDataSource<UacrTableData>;
  uacrRowMax = 7;

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'white',
      borderColor: 'black',
    },
  ];

  public lineChartLegend = false;
  public lineChartPlugins = [pluginAnnotations];
  public lineChartType = 'line';

  constructor(public dataservice: DataService) { }

  displayedColumns = ['date', 'uacr'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.uacrDataSource = this.dataservice.uacrDataSource;
  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.uacrDataSource.data.length > this.uacrRowMax) {
      this.uacrDataSource.paginator = this.paginator;
    }
    this.uacrDataSource.sort = this.sort;
    this.uacrDataSource.sortingDataAccessor = (data: UacrTableData, header: string) => {
      switch (header) {
        case ('date'): {
          return moment(data.date).unix();
        }
        default: {
          return data[header];
        }
      }
    };
  }

  UacrResult(uacr: UacrTableData): string {
    return formatUacrResult(uacr.uacr, uacr.unit);
  }

  getUacrRowCssClass(uacr: UacrTableData): string {
    let cssClass = '';
    const val = uacr.uacr;
    if (val) {
      switch (true) {
        case (val >= 300):
          cssClass = 'resultCritical';
          break;
        case (val < 300 && val >= 25):
          cssClass = 'resultBorderline';
          break;
        case (val < 25):
          cssClass = 'resultGood';
          break;
        default:
          break;
      }
    }
    return cssClass;
  }



}
