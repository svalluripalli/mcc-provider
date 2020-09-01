import {TargetValue} from './targetvalue';
import {GoalLists} from './goallists';
import {MedicationSummary} from './medicationSummary';
import {Education} from './education';
import {Referral} from './referral';
import {Contact} from './contact';
import {Demographic} from './demographics';
import {ConditionLists} from './conditionLists';
import {Concern} from './socialconcerns';
import {CarePlan} from './carePlan';


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
        description: 'Slow CKD Progression',
        rank: 1,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Cardiovascular Risk',
        rank: 2,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Prevent CKD Complications',
        rank: 3,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Maintain Target Thyroid Level',
        rank: 4,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Depression',
        rank: 5,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Congestive Heart Failure',
        rank: 6,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Rehabilitate Angle Injury',
        rank: 7,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Maintain Immunization Status',
        rank: 8,
        active: true,
        type: 'clinical'
      }
    ],
    inactiveClinicalGoals: [],
    activePatientGoals: [
      {
        description: 'Maximize Quality of Life',
        rank: 1,
        active: true,
        type: 'patient'
      },
      {
        description: 'Major Health Events: Kidney Failure, Hospitalizations',
        rank: 2,
        active: true,
        type: 'patient'
      }
    ],
    inactivePatientGoals: []
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

export const dummyCarePlan: CarePlan = {
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
