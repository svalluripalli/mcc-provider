import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {EgfrTableData} from '../datamodel/egfr';
import {formatEgfrResult} from '../../utility-functions';

@Component({
  selector: 'app-lab-test-result',
  templateUrl: './lab-test-result.component.html',
  styleUrls: ['./lab-test-result.component.css']
})
export class LabTestResultComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    console.log(`in LabTestResultComponent ngOnInit(): this.dataservices.egfr : `, this.dataservice.egfr);
  }

}
