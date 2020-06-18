import { Component, OnInit } from '@angular/core';
import {SubjectDataService} from '../subject-data-service.service';
import {CareplanService} from '../careplan.service';
import {Demographic} from '../datamodel/demographics';
import {CarePlan} from '../datamodel/carePlan';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-demographics-panel',
  templateUrl: './demographics-panel.component.html',
  styleUrls: ['./demographics-panel.component.css']
})
export class DemographicsPanelComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }

  getPeriodText(start: string, end: string): string
  {
    const out = '';
    if (end == null || end === '')
    {
      if (start === null || start === '')
      {
        return 'undefined';
      }
      return out.concat(start, ' onward');
    }
    if (start  === null || start === '')
    {
      out.concat('until ', end);
    }
    return out.concat(start, ' to ', end);
  }

  getDateLastRevised() : string
  {
     const lastRevised: string = this.dataservice.careplan.dateLastRevised;
     if (lastRevised === null || lastRevised === '')
     {
       const lastResourceUpdate = this.dataservice.careplan.dateResourceLastUpdated;
       if (lastResourceUpdate === null || lastResourceUpdate === '')
       {
         return 'No record';
       }
       return lastResourceUpdate + '(Last Save)';
     }
     return lastRevised;

  }
}
