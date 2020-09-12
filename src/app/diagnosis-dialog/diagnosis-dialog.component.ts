import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConditionHistory} from '../generated-data-api';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-diagnosis-dialog',
  templateUrl: './diagnosis-dialog.component.html',
  styleUrls: ['./diagnosis-dialog.component.css']
})
export class DiagnosisDialogComponent implements OnInit {

  displayedColumns: string[] = ['description', 'onset', 'abatement', 'status'];
  dataSource;
  history: ConditionHistory[] = [];

  constructor(private dialogRef: MatDialogRef<DiagnosisDialogComponent>,
              @Inject(MAT_DIALOG_DATA)  data: ConditionHistory[]) {

    console.log('in diagnosis-dialog.component.ts: constructor  data=', data);
    this.history = data;

  }

  ngOnInit(): void {
    console.log('in diagnosis-dialog.component.ts: ngOnInit this.history=', this.history);
    this.dataSource = new MatTableDataSource(this.history);
  }

  close() {
    this.dialogRef.close();
  }

}
