import {TargetValue} from './targetvalue';
import {GoalLists, GoalSummary, GoalTarget} from '../generated-data-api';
// import {GoalLists} from './goallists';
import {MedicationSummary} from './medicationSummary';
import {Education} from './education';
import {Referral} from './referral';
import {Contact} from './contact';
import {Demographic} from './demographics';
import {ConditionLists} from '../generated-data-api';
import {Concern} from './socialconcerns';
import {MccCarePlan} from '../generated-data-api';


export const mockContacts: Contact[] = [
  {
    type: 'person',
    role: 'patient',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'person',
    role: 'alternate_contact',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'person',
    role: 'provider',
    name: 'Dr Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'organization',
    role: 'primary_care',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  },
  {
    type: 'organization',
    role: 'insurance',
    name: 'Name goes here',
    phone: '(xxx) xxx-xxxx',
    email: 'xxx@xxxx.org',
    address: 'xxx street, city, state zipxxx'
  }
];

export const mockReferrals: Referral[] = [
  {
    purpose: 'Nephrology',
    date: '10/28/2012',
    referrer: 'John Primary Care, MD',
    receivingClincian: 'Natalie Nephrologist'
  },
  {
    purpose: 'Dietitian',
    date: '09/17/2015',
    referrer: 'John Primary Care, MD',
    receivingClincian: 'Debbie Dietitian'
  },
];

export const mockEducation: Education[] = [
  {
    topic: 'CKD - Etiology and Progressive Nature of CKD',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'CKD - Complications/Symptoms from Untreated or Progressive Kidney Disease, Including Behavioral Health Issues',
    date: '07/01/2014',
    assessmentOfUnderstanding: 'Adequate'
  }
];

export const mockNutrition: Education[] = [
  {
    topic: 'General Diet Counselling',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'Potassium Limitation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Sodium Restriction',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Phosphorous Limitation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Heart Healthy Diet',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'Protein Moderation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Fluid Intake/Management',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  }

];

export const mockMedicationSummary: MedicationSummary[] = [
  {
    name: 'lisinopril',
    classOrType: 'Ace Inhibitor',
    dose: '40mg daily',
    doseForm: 'pill',
    prescribedBy: 'Dr Jones',
    startDate: '12/07/2008',
    adverseReactions: 'None'
  }
];

export const mockTargetData: TargetValue[] = [
    {
      measure: 'Systolic Blood Pressure (mm Hg)',
      mostRecentResult: '155',
      date: '02/13/2017',
      target: '<140',
      status: 'high'
    },
    {
      measure: 'Diastolic Blood Pressure (mm Hg)',
      mostRecentResult: '92',
      date: '02/13/2017',
      target: '<80',
      status: 'high'
    },
    {
      measure: 'Potassium (mEq/L)',
      mostRecentResult: '4.8',
      date: '02/05/2017',
      target: '3.5-5.0',
      status: 'good'
    },
    {
      measure: 'Bicarbonate (mEq/L)',
      mostRecentResult: '23',
      date: '02/05/2017',
      target: '>22',
      status: 'good'
    },
    {
      measure: 'Phosphorous (mEq/dL)',
      mostRecentResult: '4.3',
      date: '02/05/2017',
      target: '2.5-4.5',
      status: 'good'
    },
    {
      measure: 'Calcium (mEq/dL)',
      mostRecentResult: '10.1',
      date: '02/05/2017',
      target: '8.5-10.2',
      status: 'good'
    },
    {
      measure: 'Diabetes: A1C (%)',
      mostRecentResult: '8',
      date: '02/05/2017',
      target: '<7',
      status: 'high'
    },
    {
      measure: 'LDL Cholesterol (mg/dL)',
      mostRecentResult: '120',
      date: '02/05/2017',
      target: '<100',
      status: 'high'
    }
  ];

export const mockGoalList: GoalLists = {
    activeClinicalGoals: [
      {
        priority: 'high-priority',
        expressedByType: 'Practitioner',
        description: 'Stabilize Hemoglobin A1c',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '11/30/2016',
        targets: [
          {
            measure: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '4548-4',
                  display: '4548-4'
                }
              ],
              text: 'Hemoglobin A1c total in Blood'
            },
            value: {
              valueType: 'Quantity',
              integerValue: 0,
              booleanValue: false,
              quantityValue: {
                unit: '%',
                comparator: '<',
                value: '7',
                system: 'http://unitsofmeasure.org/',
                code: '%'
              }
            }
          }
        ],
        fhirid: 'cc-goal-betsy-a1c'
      },
      {
        priority: 'high-priority',
        expressedByType: 'Practitioner',
        description: 'Phosphorus in blood',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '02/20/2018',
        targets: [
          {
            measure: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '2777-1',
                  display: '2777-1'
                }
              ],
              text: 'Serum phosphorus'
            },
            value: {
              valueType: 'Range',
              integerValue: 0,
              booleanValue: false,
              rangeValue: {
                high: {
                  unit: 'mg/dL',
                  value: '4.5',
                  system: 'http://unitsofmeasure.org',
                  code: 'mg/dL'
                },
                low: {
                  unit: 'mg/dL',
                  value: '2.5',
                  system: 'http://unitsofmeasure.org',
                  code: 'mg/dL'
                }
              }
            }
          }
        ],
        fhirid: 'cc-goal-betsy-lab-phos'
      },
      {
        priority: 'medium-priority',
        expressedByType: 'Practitioner',
        description: 'Systolic blood pressure',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '06/30/2017',
        targets: [
          {
            measure: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8480-6',
                  display: '8480-6'
                }
              ],
              text: 'Systolic blood pressure'
            },
            value: {
              valueType: 'Quantity',
              integerValue: 0,
              booleanValue: false,
              quantityValue: {
                unit: 'mmHg',
                comparator: '<',
                value: '140',
                system: 'http://unitsofmeasure.org',
                code: 'mm[Hg]'
              }
            }
          }
        ],
        fhirid: 'cc-goal-betsy-bp-systolic'
      },
      {
        priority: 'Undefined',
        expressedByType: 'Practitioner',
        description: 'Diastolic blood pressure',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '01/12/2019',
        targets: [
          {
            measure: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8462-4',
                  display: '8462-4'
                }
              ],
              text: 'Diastolic blood pressure'
            },
            value: {
              valueType: 'Quantity',
              integerValue: 0,
              booleanValue: false,
              quantityValue: {
                unit: 'mmHg',
                comparator: '<',
                value: '80',
                system: 'http://unitsofmeasure.org',
                code: 'mm[Hg]'
              }
            }
          }
        ],
        fhirid: 'cc-goal-betsy-bp-diastolic'
      },
      {
        priority: 'Undefined',
        expressedByType: 'Practitioner',
        description: 'Exercise at least 30 minutes per day',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '12/07/2017',
        targets: [
          {
            measure: {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '226029000',
                  display: '226029000'
                }
              ],
              text: 'Exercises'
            }
          }
        ],
        fhirid: 'cc-goal-betsy-exercise'
      }
    ],
    inactiveClinicalGoals: [
    ],
    activePatientGoals: [
      {
        priority: 'high-priority',
        expressedByType: 'Patient',
        description: 'Maximize Quality of Life',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'in-progress'
            }
          ],
          text: 'In Progress'
        },
        lifecycleStatus: 'active',
        startDateText: '11/30/2016',
        fhirid: 'cc-goal-betsy-maxql'
      }
    ],
    inactivePatientGoals: [
      {
        priority: 'high-priority',
        expressedByType: 'Patient',
        description: 'Be able to dance again',
        achievementStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'achieved',
              display: 'achieved'
            }
          ],
          text: 'Achieved'
        },
        lifecycleStatus: 'completed',
        startDateText: '10/30/2015',
        fhirid: 'cc-goal-betsy-dance'
      }
    ]
  };

export const dummySubject: Demographic = {
  name: 'No Patient Selected',
  id: 'ID-000',
  fhirid: 'cc-pat-null',
  dateOfBirth: '01/01/1900',
  gender: 'Male',
  race: 'White',
  ethnicity: 'Not Hispanic or Latino'
};

export const dummyPatientId = 'cc-pat-null';
export const dummyCareplanId = 'cc-careplan-null-ckd';

export const dummyConditions: ConditionLists = {
  activeConditions: [],
  inactiveConditions: [],
  activeConcerns: [],
  inactiveConcerns: []
};

export const dummyCarePlan: MccCarePlan = {
  title: 'None',
  dateLastRevised: '01/01/1900',
  addresses: [],
  addressesSummary: '',
  categorySummary: '',
  categories: [],
  id: 'Unknown',
  periodStarts: '01/01/1900',
  periodEnds: '01/01/1900',
  status: 'InActive',
  intent: 'plan',
  description: 'No Care Plan Selected',
  notes: 'string',
  dateResourceLastUpdated: '01/01/1900',
  fhirid: 'cc-careplan-null-ckd'
};

export const dummySocialConcerns: Concern[] = [];

/*
export const dummyGoals: GoalLists =  new class implements GoalLists {
  activeClinicalGoals: Goal[];
  activePatientGoals: Goal[];
  inactiveClinicalGoals: Goal[];
  inactivePatientGoals: Goal[];
} ();
*/

export const dummyGoals: GoalLists = new class implements GoalLists {
  activeClinicalGoals: Array<GoalSummary>;
  activePatientGoals: Array<GoalSummary>;
  activeTargets: Array<GoalTarget>;
  inactiveClinicalGoals: Array<GoalSummary>;
  inactivePatientGoals: Array<GoalSummary>;
}();
