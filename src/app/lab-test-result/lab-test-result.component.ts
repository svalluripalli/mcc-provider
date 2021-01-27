import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { MccObservation } from '../generated-data-api';
import { DataService } from '../services/data.service';
import { ObservationsService } from '../services/observations.service';

interface PatientLabResultsMap {
  name: string;
  value: string;
  type: string;
}

@Component({
  selector: 'app-lab-test-result',
  templateUrl: './lab-test-result.component.html',
  styleUrls: ['./lab-test-result.component.css']
})
export class LabTestResultComponent implements OnInit {
  results: MccObservation[] = [];
  patientId: string;
  longTermCondition: string;

  constructor(
    public dataservice: DataService,
    private obsService: ObservationsService
  ) { }

  ngOnInit(): void {
    console.log(`in LabTestResultComponent ngOnInit(): this.dataservices.egfr : `, this.dataservice.egfr);
  }
}
