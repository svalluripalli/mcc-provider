import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {DataService} from './data.service';
import {environment} from '../environments/environment';
import {Observable, of, Subscription} from 'rxjs';
import {tap, startWith, debounceTime, distinctUntilChanged, switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  // todo:  use of patSearch template variable to set focus not working..
  @ViewChild('patSearch', {static: true}) patSearch: any;

  constructor(public dataservice: DataService, public subjectdataservice: SubjectDataService) {
  }

  title = 'providersmartapp';
  events: string[] = [];
  opened: boolean;
  apiURL: string;
  // lstPatients: string[] = ['Betsy Johnson', 'Betty N. Davis'];
  // currentSubjectId = 'cc-pat-betsy';
  // currentCarePlanId = 'cc-careplan-betsy-ckd';
  currentSubjectId = '';
  currentCarePlanId = '';
  patientSearch = new FormControl('', Validators.required);

  filteredPatients: Observable<any[]>;
  selectedPatientId = '';
  showPatientSearch = false;
  minSearchCharacters = 3;

  ngOnInit(): void {

    this.apiURL = environment.mccapiUrl;
    this.initFilteredPatients();
    this.dataservice.setCurrentSubject(this.currentSubjectId);
    this.dataservice.setCurrentCarePlan(this.currentCarePlanId);

  }

  private _dataFilter(val: string): Observable<any> {
    // call the http data to find matching patients
    if (val.length >= this.minSearchCharacters) {
      return this.subjectdataservice.getSubjects(val)
        .pipe(
          map(response => response)
        );
    }
  }

  patientSelected(data) {
    this.currentSubjectId = data;
    this.dataservice.setCurrentSubject(this.currentSubjectId);
    this.currentCarePlanId = 'cc-careplan-betsy-ckd';   // todo:   Get care plan from subject
    this.dataservice.setCurrentCarePlan(this.currentCarePlanId);
    this.patientSearch.setValue('');
    this.showPatientSearch = false;
    // clear filteredPatients object
    this.initFilteredPatients();

  }

  togglePatientSearch() {
    this.showPatientSearch = !this.showPatientSearch;
    if (this.showPatientSearch) {
      this.patientSearch.setValue('');
      this.patSearch.nativeElement.focus();
    }
  }

  initFilteredPatients() {
    this.filteredPatients = new Observable<any[]>();
    this.filteredPatients = this.patientSearch.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this._dataFilter(value || ''))
      );
  }

}
