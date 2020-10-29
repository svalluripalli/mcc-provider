import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Color} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {EgfrTableData} from '../datamodel/egfr';
import {formatEgfrResult, reformatYYYYMMDD} from '../../utility-functions';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-e-gfr',
  templateUrl: './e-gfr.component.html',
  styleUrls: ['./e-gfr.component.css']
})
export class EGFRComponent implements OnInit, AfterViewInit {

  egfrDataSource: MatTableDataSource<EgfrTableData> = this.dataservice.egfrDataSource;
  egfrRowMax = 7;

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];
  lineChartLegend = false;
  lineChartPlugins =  [pluginAnnotations];
  lineChartType = 'line';

  constructor(public dataservice: DataService) {
  }

  displayedColumns = ['date', 'result'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.egfrDataSource.data.length > this.egfrRowMax) {
      this.egfrDataSource.paginator = this.paginator;
    }
    this.egfrDataSource.sort = this.sort;
    this.egfrDataSource.sortingDataAccessor = (data: EgfrTableData, header: string) => {
      console.log('in egfrDataSource.sortingDataAccessor: data: ', data);
      switch (header) {
        case ('result'): {
          return data.egfr;
          break;
        }

        case ('date' ): {
          return reformatYYYYMMDD(data.date);
          break;
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

  EgfrResult(egfr: EgfrTableData): string {
    return formatEgfrResult(egfr.egfr, egfr.unit);
  }

  getEgfrRowCssClass(egfr: EgfrTableData): string {
    let cssClass = '';
    const val = egfr.egfr;
    if (val) {
      switch (true) {
        case (val >= 40):
          cssClass = 'resultGood';
          break;
        case (val < 40 && val >= 35):
          cssClass = 'resultBorderline';
          break;
        case (val < 35):
          cssClass = 'resultCritical';
          break;
        default:
          break;
      }
    }
    return cssClass;
  }



}
