import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-medication-panel',
  templateUrl: './medication-panel.component.html',
  styleUrls: ['./medication-panel.component.css']
})

export class MedicationPanelComponent implements OnInit, AfterViewInit {

  constructor(public dataService: DataService) { }
  displayedColumns = ['name', 'reason', 'dose', 'prescribedBy', 'issues', 'priority'];
  activeMedicationsDataSource = this.dataService.activeMedicationsDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.activeMedicationsDataSource.paginator = this.paginator;
  }

}
