import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-care-team',
  templateUrl: './care-team.component.html',
  styleUrls: ['./care-team.component.css']
})
export class CareTeamComponent implements OnInit {
  gridColumns = 4;
  constructor(public dataservice: DataService) {console.log(this.dataservice.contacts); }

  ngOnInit(): void {

  }

}
