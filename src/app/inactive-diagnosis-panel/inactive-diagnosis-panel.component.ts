import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DiagnosisDialogComponent} from '../diagnosis-dialog/diagnosis-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})

// todo: combine ActiveDiagnosisPanelCompenent and InactiveDiagnosisPanelCompenent into one component
export class InactiveDiagnosisPanelComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;
  constructor(public dataservice: DataService, private dialog: MatDialog, private rt: ActivatedRoute, private rtr: Router) {
    this.route = rt;
    this.router = rtr;
  }
  displayedColumns = ['checked', 'name', 'rxfilter', 'trend', 'date'];

  ngOnInit(): void {
  }

  onRowClicked(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '700px';
    dialogConfig.data = {
      name: this.dataservice.demographic.name,
      condition: row.code.text,
      history: row.history
    };
    this.dialog.open(DiagnosisDialogComponent, dialogConfig);
  }

  switchToHM(code: string) {
    // console.log('Switch to Health Maintenance icon clicked. code=', code);
    this.router.navigate(['/maint'], { queryParamsHandling: 'merge' });
  }

  switchToHS(code: string) {
    // console.log('Switch to Health Status icon clicked. code=', code);
    this.router.navigate(['status'], { queryParamsHandling: 'merge' });
  }

}
