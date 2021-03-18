import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';


@Component({
  selector: 'app-social-concern-panel',
  templateUrl: './social-concern-panel.component.html',
  styleUrls: ['./social-concern-panel.component.css']
})

export class SocialConcernPanelComponent implements OnInit {
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService) {
  }

  displayedColumns = ['name', 'data', 'date'];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.socialConcerns);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'date': return moment(item[property]).unix();
        default: return item[property];
      }
    };
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
