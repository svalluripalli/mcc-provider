import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-consolidated-goals',
  templateUrl: './consolidated-goals.component.html',
  styleUrls: ['./consolidated-goals.component.css']
})
export class ConsolidatedGoalsComponent implements OnInit, AfterViewInit {

  constructor(public dataService: DataService) { }

  displayedColumns = ['rank', 'lfcstatus', 'description', 'created', 'targetdate', 'status',  'expressedby', 'expressedbytype'];
  consolidatedGoalsDataSource = this.dataService.consolidatedGoalsDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.consolidatedGoalsDataSource.paginator = this.paginator;
    this.consolidatedGoalsDataSource.sort = this.sort;
  }

}
