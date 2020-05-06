import {Component, OnInit} from '@angular/core';
import {SubjectDataService} from '../subject-data-service.service';


@Component({
  selector: 'app-social-concern-panel',
  templateUrl: './social-concern-panel.component.html',
  styleUrls: ['./social-concern-panel.component.css']
})

export class SocialConcernPanelComponent implements OnInit {

  constructor(private subjectdataservice: SubjectDataService) {
  }

  displayedColumns = ['name', 'data', 'date'];

  dataSource;

  ngOnInit(): void {
    this.dataSource = this.subjectdataservice.getConcerns();
  }

}
