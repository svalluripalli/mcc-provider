import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-demographics-panel',
  templateUrl: './demographics-panel.component.html',
  styleUrls: ['./demographics-panel.component.css']
})
export class DemographicsPanelComponent implements OnInit {
  constructor(public dataservice: DataService) { }
  ngOnInit(): void {
  }

  getPeriodText(start: string, end: string): string {
    const out = '';
    if (end == null || end === '') {
      if (start === null || start === '' || start === "undefined") {
        return 'undefined';
      }
      return out.concat(start, ' onward');
    }
    if (start === null || start === '') {
      out.concat('until ', end);
    }
    return out.concat(start, ' to ', end);
  }

  getDateLastRevised(): string {
    const lastRevised: string = this.dataservice.careplan.dateLastRevised;
    if (lastRevised === null || lastRevised === '') {
      const lastResourceUpdate = this.dataservice.careplan.dateResourceLastUpdated;
      if (lastResourceUpdate === null || lastResourceUpdate === '') {
        return 'No record';
      }
      return lastResourceUpdate + '(Last Save)';
    }
    return lastRevised;

  }
}
