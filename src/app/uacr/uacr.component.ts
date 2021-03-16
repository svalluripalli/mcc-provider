import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Color} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {UacrTableData} from '../datamodel/uacr';
import {formatUacrResult, reformatYYYYMMDD} from '../util/utility-functions';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-uacr',
  templateUrl: './uacr.component.html',
  styleUrls: ['./uacr.component.css']
})
export class UACRComponent implements OnInit, AfterViewInit {

  uacrDataSource: MatTableDataSource<UacrTableData> = this.dataservice.uacrDataSource;
  uacrRowMax = 7;

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'white',
      borderColor: 'black',
    },
  ];

  public lineChartLegend = false;
  public lineChartPlugins =  [pluginAnnotations];
  public lineChartType = 'line';

  constructor(public dataservice: DataService) { }

  displayedColumns = ['date', 'result'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.uacrDataSource.data.length > this.uacrRowMax) {
      this.uacrDataSource.paginator = this.paginator;
    }
    this.uacrDataSource.sort = this.sort;
    this.uacrDataSource.sortingDataAccessor = (data: UacrTableData, header: string) => {
      switch (header) {
        case ('result'): {
          return data.uacr;
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
