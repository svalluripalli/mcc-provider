import { Injectable } from '@angular/core';
import { Demographic } from './datamodel/demographics';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {CarePlan} from './datamodel/carePlan';
import {SocialConcerns} from './datamodel/socialconcerns';
import {ConditionLists} from './datamodel/conditionLists';
import {TargetValue} from './datamodel/targetvalue';
import {mockEducation, mockNutrition, mockReferrals, mockTargetData} from './datamodel/mockData';
import {mockGoalList} from './datamodel/mockData';
import {mockMedicationSummary} from './datamodel/mockData';
import {GoalLists} from './datamodel/goallists';
import {MedicationSummary} from './datamodel/medicationSummary';
import {Education} from './datamodel/education';
import {Referral} from './datamodel/referral';

@Injectable({
  providedIn: 'root'
})

export class DataService  {

  currentPatientId: string;
  currentCareplaId: string;
  demographic: Demographic;
  careplan: CarePlan;
  socialConcerns: SocialConcerns[];
  conditions: ConditionLists;
  targetValues: TargetValue[];
  goals: GoalLists;
  medications: MedicationSummary[];
  education: Education[];
  nutrition: Education[];
  referrals: Referral[];

  constructor(private subjectdataservice: SubjectDataService, private careplanservice: CareplanService) { }

  async setCurrentSubject(patientId: string): Promise<boolean>
  {
    this.currentPatientId = patientId;
    this.subjectdataservice.getSubject(this.currentPatientId)
      .subscribe(demograhic => this.demographic = demograhic);
    this.subjectdataservice.getConditions(this.currentPatientId)
      .subscribe(condition => this.conditions = condition);
    this.medications = mockMedicationSummary;
    this.education = mockEducation;
    this.nutrition = mockNutrition;
    this.referrals = mockReferrals;
    return true;
  }

  async setCurrentCarePlan(planId: string): Promise<boolean>
  {
    this.currentCareplaId = planId;
    this.careplanservice.getCarePlan(this.currentCareplaId)
      .subscribe(careplan => this.careplan = careplan);
    this.subjectdataservice.getSocialConcerns(this.currentPatientId, this.currentCareplaId)
      .subscribe(concerns => this.socialConcerns = concerns);
    this.targetValues = mockTargetData;
    this.goals = mockGoalList;
    return true;
  }


}
