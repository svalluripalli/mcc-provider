import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medication-panel',
  templateUrl: './medication-panel.component.html',
  styleUrls: ['./medication-panel.component.css']
})

export class MedicationPanelComponent implements OnInit, AfterViewInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['medication', 'reasons', 'dosages', 'requestedBy', 'issues', 'priority'];
  activeMedicationsDataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.activeMedicationsDataSource = this.dataService.activeMedicationsDataSource;
  }

  ngAfterViewInit(): void {
    this.activeMedicationsDataSource.sort = this.sort;
    this.activeMedicationsDataSource.paginator = this.paginator;
  }

}
