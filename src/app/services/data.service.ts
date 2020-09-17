import {Injectable} from '@angular/core';
import {Demographic} from '../datamodel/old/demographics';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {GoalsDataService} from './goals-data-service.service';
import {Contact, MccCarePlan} from '../generated-data-api';
import {SocialConcerns} from '../datamodel/old/socialconcerns';
// import {ConditionLists} from './datamodel/conditionLists';
import {ConditionLists} from '../generated-data-api';
import {TargetValue} from '../datamodel/old/targetvalue';
import {
  dummyPatientId,
  dummyCareplanId,
  dummySubject,
  dummyConditions,
  dummyCarePlan,
  dummySocialConcerns,
  dummyGoals,
  emptyContacts,
  mockEducation,
  mockNutrition,
  mockReferrals,
  emptyTargetData,
  mockGoalList,
  mockMedicationSummary, emptyGoalsList,
} from '../datamodel/mockData';
import {GoalLists} from '../generated-data-api';
import {MedicationSummary} from '../datamodel/old/medicationSummary';
import {Education} from '../datamodel/education';
import {Referral} from '../datamodel/referral';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {ContactsService} from './contacts.service';
import {MedicationService} from './medication.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  authorizationToken: string;
  mainfhirserver: string;
  currentPatientId: string;
  currentCareplanId: string;
  demographic: Demographic;
  careplan: MccCarePlan;
  careplans: MccCarePlan[];
  socialConcerns: SocialConcerns[];
  conditions: ConditionLists;
  targetValues: TargetValue[];
  goals: GoalLists;
  medications: MedicationSummary[];
  education: Education[];
  nutrition: Education[];
  referrals: Referral[];
  contacts: Contact[];

  private commonHttpOptions;
  constructor(private subjectdataservice: SubjectDataService,
              private careplanservice: CareplanService,
              private goalsdataservice: GoalsDataService,
              private contactdataService: ContactsService,
              private medicationdataService: MedicationService) {
    this.medications = mockMedicationSummary;
    this.education = mockEducation;
    this.nutrition = mockNutrition;
    this.referrals = mockReferrals;
    this.contacts = emptyContacts;
    this.goals = emptyGoalsList;
  }

  updateFHIRConnection(server: string, token: string)
  {
    this.authorizationToken = token;
    console.log('Token = ' + token);
    this.mainfhirserver = server;
    let headersobj = new HttpHeaders();
    headersobj = headersobj.set('Content-Type', 'application/json').set('mcc-fhir-server', server).set('mcc-token', token);
    this.commonHttpOptions = {
      headers: headersobj
    };
    this.subjectdataservice.httpOptions = this.commonHttpOptions;
    this.careplanservice.httpOptions = this.commonHttpOptions;
    this.goalsdataservice.httpOptions = this.commonHttpOptions;
    this.contactdataService.httpOptions = this.commonHttpOptions;
    this.medicationdataService.httpOptions = this.commonHttpOptions;
  }
  getCurrentPatient(): Observable<Demographic> {
    return this.subjectdataservice.getSubject(this.currentPatientId).pipe(
      map(data => data)
    );
  }
  async setCurrentSubject(patientId: string): Promise<boolean> {
    this.currentPatientId = patientId;
    if ((!patientId || patientId.trim().length === 0)) {
      this.currentPatientId = dummyPatientId;
      this.currentCareplanId = dummyCareplanId;
      this.demographic = dummySubject;
      this.conditions = dummyConditions;
      this.goals  = emptyGoalsList;
    } else {
      /*
      this.subjectdataservice.getSubject(this.currentPatientId)
        .subscribe(demograhic => this.demographic = demograhic);
      this.subjectdataservice.getConditions(this.currentPatientId)
        .subscribe(condition => this.conditions = condition);
       */
      this.updateDemographics();
      this.updateConditions();
      this.getCarePlansForSubject();
      this.getPatientGoals();
      this.updateContacts();
    }
    this.medications = mockMedicationSummary;
    this.education = mockEducation;
    this.nutrition = mockNutrition;
    this.referrals = mockReferrals;
    this.contacts = emptyContacts;
    this.targetValues = emptyTargetData;
    return true;

  }

  async setCurrentCarePlan(planId: string): Promise<boolean> {
    this.currentCareplanId = planId;
    if ((!planId || planId.trim().length === 0)) {
      this.socialConcerns = dummySocialConcerns;
      this.careplan = dummyCarePlan;
    } else {
      await this.updateCarePlan();
      await this.updateSocialConcerns();
      await this.updateContacts();
    }
    /*
    this.careplanservice.getCarePlan(this.currentCareplaId)
      .subscribe(careplan => this.careplan = careplan);
    this.subjectdataservice.getSocialConcerns(this.currentPatientId, this.currentCareplaId)
      .subscribe(concerns => this.socialConcerns = concerns);
    */
    return true;
  }

  async updateCarePlan(): Promise<boolean> {
    this.careplanservice.getCarePlan(this.currentCareplanId)
      .subscribe(careplan => this.careplan = careplan);
    return true;
  }

 async getCarePlansForSubject(): Promise <boolean> {
   this.careplanservice.getCarePlansBySubject(this.currentPatientId)
      .subscribe((cp ) => {
        this.careplans = cp;
        if (this.careplans.length > 0) {
          this.careplan = this.careplans[this.careplans.length - 1]; // Iniatlize selected careplan to last in MccCarePlan array
          this.currentCareplanId = this.careplan.fhirid;
          this.updateContacts();
        }  else {
          this.careplan = dummyCarePlan;        // Initialize selected careplan to dummy careplan if no care plans available for subject
          this.updateContacts();
        }
        this.updateSocialConcerns();
      });
   return true;
 }

  async updateSocialConcerns(): Promise<boolean> {
    this.subjectdataservice.getSocialConcerns(this.currentPatientId, this.currentCareplanId)
      .subscribe(concerns => this.socialConcerns = concerns);
    return true;
  }


  async updateContacts(): Promise<boolean> {
    this.contactdataService.getContactsBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
      .subscribe(contacts => this.contacts = contacts);
    return true;
  }


  async updateMedicationss(): Promise<boolean> {
   // this.medicationdataService.getMedicationsBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
   //   .subscribe(contacts => this.contacts = contacts);
    return true;
  }


  async updateDemographics(): Promise<boolean> {
    this.subjectdataservice.getSubject(this.currentPatientId)
      .subscribe(demograhic => this.demographic = demograhic);
    // this.subjectdataservice.getConditions(this.currentPatientId)
    //   .subscribe(condition => this.conditions = condition);
    return true;
  }

  async updateConditions(): Promise<boolean> {
    this.subjectdataservice.getConditions(this.currentPatientId)
      .subscribe(condition => this.conditions = condition);
    return true;
  }

  async getPatientGoals(): Promise<boolean> {
    this.goalsdataservice.getGoals(this.currentPatientId)
      .subscribe(goals => this.goals = goals);
    return true;
  }


}
