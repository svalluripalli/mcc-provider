import {Injectable} from '@angular/core';
import {Demographic} from './datamodel/demographics';
import {SubjectDataService} from './subject-data-service.service';
import {CareplanService} from './careplan.service';
import {GoalsDataService} from './goals-data-service.service';
import {GoalTarget, MccCarePlan} from './generated-data-api';
import {SocialConcerns} from './datamodel/socialconcerns';
// import {ConditionLists} from './datamodel/conditionLists';
import {ConditionLists} from './generated-data-api';
import {TargetValue} from './datamodel/targetvalue';
import {
  dummyPatientId,
  dummyCareplanId,
  dummySubject,
  dummyConditions,
  dummyCarePlan,
  dummySocialConcerns,
  dummyGoals,
  mockContacts,
  mockEducation,
  mockNutrition,
  mockReferrals,
  mockTargetData,
  mockGoalList,
  mockMedicationSummary,
} from './datamodel/mockData';
import {GoalLists} from './generated-data-api';
import {MedicationSummary} from './datamodel/medicationSummary';
import {Education} from './datamodel/education';
import {Referral} from './datamodel/referral';
import {Contact} from './datamodel/contact';

@Injectable({
  providedIn: 'root'
})

export class DataService {

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

  constructor(private subjectdataservice: SubjectDataService,
              private careplanservice: CareplanService,
              private goalsdataservice: GoalsDataService) {
  }

  async setCurrentSubject(patientId: string): Promise<boolean> {
    this.currentPatientId = patientId;
    if ((!patientId || patientId.trim().length === 0)) {
      this.currentPatientId = dummyPatientId;
      this.currentCareplanId = dummyCareplanId;
      this.demographic = dummySubject;
      this.conditions = dummyConditions;
      this.goals = dummyGoals;
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
    }
    this.medications = mockMedicationSummary;
    this.education = mockEducation;
    this.nutrition = mockNutrition;
    this.referrals = mockReferrals;
    this.contacts = mockContacts;
    // this.targetValues = mockTargetData;
    return true;

  }

  async setCurrentCarePlan(planId: string): Promise<boolean> {
    this.currentCareplanId = planId;
    if ((!planId || planId.trim().length === 0)) {
      this.socialConcerns = dummySocialConcerns;
      this.careplan = dummyCarePlan;
    } else {
      this.updateCarePlan();
      this.updateSocialConcerns();
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

  async getCarePlansForSubject(): Promise<boolean> {
    this.careplanservice.getCarePlansBySubject(this.currentPatientId)
      .subscribe((cp) => {
        this.careplans = cp;
        if (this.careplans.length > 0) {
          this.careplan = this.careplans[0];    // Inialize selected careplan to first in MccCarePlan array
        } else {
          this.careplan = dummyCarePlan;        // Initialize selected careplan to dummy careplan if no care plans available for subject
        }
      });
    return true;
  }

  async updateSocialConcerns(): Promise<boolean> {
    this.subjectdataservice.getSocialConcerns(this.currentPatientId, this.currentCareplanId)
      .subscribe(concerns => this.socialConcerns = concerns);
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
    console.log('In getPatientGoals');
    this.goalsdataservice.getGoals(this.currentPatientId)
      .subscribe(goals => {
        this.targetValues = [];
        this.goals = goals;
        // todo:  figure out how to call getMostRecentObservationResult in goals-data-service.service.ts here for each activetarget
        goals.activeTargets.map(gt => {
          console.log('gt.measure.coding[0].code= ', gt.measure.coding[0].code);
          // todo : remove generation of test most recent result value
          let recent = 11;
          if (gt.value  !==  undefined  && gt.value.valueType === 'Quantity' ) {
            const qv = parseInt(gt.value.quantityValue.value);
            recent = this.genRand(qv - .5, qv + 1.5, 1);
          }
          // ++++++
          const tv: TargetValue = {
            measure: gt.measure.text,
            date: '2010-01-01',      // todo: get from call to get latest observation.
            mostRecentResult: recent.toString(),
            target: this.formatTargetValue(gt),
            status: ''                // todo: get from call to get latest observation.
          };
          this.targetValues.push(tv);
        });
      });
    console.log(this.targetValues);
    return true;
  }

  genRand(min: number, max: number, decimalPlaces?: number) {
    const rand = Math.random() * (max - min) + min;
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  formatTargetValue(target: GoalTarget) {
    let formatted = 'Unknown Type: ' ;
    if (target.value !== undefined) {
      formatted += ' ' + target.value.valueType;
      switch (target.value.valueType) {
        case 'String': {
          formatted = target.value.stringValue;
          return formatted;
        }
        case 'Integer': {
          formatted = target.value.integerValue.toString();
          break;
        }
        case 'Boolean': {
          formatted = String(target.value.booleanValue);
          break;
        }
        case 'CodeableConcept': {
          // todo:  formatTargetValue CodeableConcept
          break;
        }
        case 'Quantity': {
          formatted = target.value.quantityValue.comparator
            + target.value.quantityValue.value.toString()
            + ' ' + target.value.quantityValue.unit;
          break;
        }
        case 'Range': {
          formatted = target.value.rangeValue.low.value
            + ' - ' + target.value.rangeValue.high.value
            + ' ' + target.value.rangeValue.high.unit;
          break;
        }
        case 'Ratio': {
          // todo:  formatTargetValue Ratio
          break;
        }
        case 'Period': {
          // todo:  formatTargetValue Period
          break;
        }
        case 'Date': {
          // todo:  formatTargetValue Date
          break;
        }
        case 'Time': {
          // todo:  formatTargetValue Time
          break;
        }
        case 'DateTime': {
          // todo:  formatTargetValue DateTime
          break;
        }
        case 'SampledData': {
          // todo:  formatTargetValue SampledData
          break;
        }
        case 'DurationValue': {
          // todo:  formatTargetValue DurationValue
          break;
        }
        case 'TimingValue': {
          // todo:  formatTargetValue TimingValue
          break;
        }
        case 'InstantValue': {
          // todo:  formatTargetValue InstantValue
          break;
        }
        case 'IdentifierValue': {
          // todo:  formatTargetValue IdentifierValue
          break;
        }

      }
    }

    return formatted;

  }

}
