import {
  AfterContentInit,
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {DataService} from './data.service';
import {environment} from '../environments/environment';
import {Observable, of, Subscription} from 'rxjs';
import {tap, startWith, debounceTime, distinctUntilChanged, switchMap, map} from 'rxjs/operators';
import {MccCarePlan} from './generated-data-api';
import {ActivatedRoute} from '@angular/router';

declare var FHIR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

  // todo:  use of patSearch template variable to set focus not working..
  @ViewChild('patSearch', {static: true}) patSearch: any;

  constructor(public dataservice: DataService, public subjectdataservice: SubjectDataService,
              private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {
  }

  basefhirserver = 'https://api.logicahealth.org/MCCeCarePlanTest/open/';
  title = 'providersmartapp';
  events: string[] = [];
  opened: boolean;
  apiURL: string;
  // currentSubjectId = 'cc-pat-betsy';
  // currentCarePlanId = 'cc-careplan-betsy-ckd';
  currentSubjectId = '';
  currentCarePlanId = '';
  patientSearch = new FormControl('', Validators.required);

  filteredPatients: Observable<any[]>;
  selectedPatientId = '';
  showPatientSearch = false;
  smartLaunch = false;
  refreshedForced = false;
  minSearchCharacters = 3;
  devmode = false;
  patientCarePlans: Observable<MccCarePlan[]>;

  ngOnInit(): void {
    this.dataservice.mainfhirserver = this.basefhirserver;
    this.apiURL = environment.mccapiUrl;
    this.initFilteredPatients();
    this.dataservice.setCurrentSubject(this.currentSubjectId);
    this.dataservice.setCurrentCarePlan(this.currentCarePlanId);
    this.route.queryParams.subscribe(params => {
        console.log(params); // { order: "popular" }

        const dev = params.devmode;
        this.devmode = (dev === 'true');
        console.log('Development Mode: ' + this.devmode);
        if (params.subject != null) {
          this.currentSubjectId = params.subject;
          this.dataservice.setCurrentSubject(this.currentSubjectId);
        }
      }
    );

  }
  ngAfterViewInit(): void
  {
    FHIR.oauth2.ready()
      .then(client => {
        client.request('Patient');
        const skey = sessionStorage.SMART_KEY;
        const key = skey.replace(/['"]+/g, '');
        console.log('Ang: Smart Key is ' + key);
        if (key != null) {
          const info = JSON.parse(sessionStorage.getItem(key));
          if (info != null) {
            console.log('server: ' + info.serverUrl);
            const tokenResp = info.tokenResponse;
            console.log('access_token: ' + tokenResp.access_token);
            console.log('patient: ' + tokenResp.patient);
            this.dataservice.updateFHIRConnection(info.serverUrl, tokenResp.access_token);
            this.patientSelected(tokenResp.patient);
            this.smartLaunch = true;
            this.changeDetector.detectChanges();
          } else {
            console.log('No in for key ' + key + ' found');
          }
        }
      }
      );
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
    this.patientCarePlans = new Observable<MccCarePlan[]>();     // Initialize patient care plans to empty object.
    this.dataservice.setCurrentSubject(this.currentSubjectId);   // Care Plan selection for patient done in dataservice.setCurrentSubject
    this.patientSearch.setValue('');
    this.showPatientSearch = false;
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
