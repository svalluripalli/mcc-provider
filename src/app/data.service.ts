import { Injectable } from '@angular/core';
import { Demographic } from './datamodel/demographics';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {CarePlan} from './datamodel/carePlan';

@Injectable({
  providedIn: 'root'
})

export class DataService  {

  private baseURL = 'http://localhost:8080/patient';
  demographic: Demographic;
  currentPatientId: string;
  careplan: CarePlan;
  currentCareplaId: string;

  constructor(private subjectdataservice: SubjectDataService, private careplanservice: CareplanService) { }

  setCurrentSubject(patientId: string): void
  {
    this.currentPatientId = patientId;
    this.subjectdataservice.getSubject(this.currentPatientId)
      .subscribe(demograhic => this.demographic = demograhic);
  }

  setCurrentCarePlabn(planId: string): void
  {
    this.currentCareplaId = planId;
    this.careplanservice.getCarePlan(this.currentCareplaId)
      .subscribe(careplan => this.careplan = careplan);
  }
}

