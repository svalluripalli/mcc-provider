import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HumanName, Patient, PatientContact } from 'fhir/r4';
import {
  getPatient as EccgetPatient,
  getReference
} from 'e-care-common-data-services';
import { Contact, MccPatient } from '../generated-data-api';
import { MessageService } from './message.service';
import { SocialConcern } from '../generated-data-api';
import { environment } from '../../environments/environment';
import { ConditionLists } from '../generated-data-api';


@Injectable({ providedIn: 'root' })
export class SubjectDataService {

  baseServer = environment.mccapiUrl;

  // private patientURL = '/patient';
  private conditionSummaryURL = '/conditionsummary';
  private concernURL = '/socialconcerns';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }




  /** GET Subject by id. Will 404 if id not found */
  getSubject(id: string): Observable<MccPatient> {
    return from(EccgetPatient(id)).pipe(
      map(observation => {
       return this.map2MCCObservation(observation);
    }));
  }

  // name?: string;
  // id?: string;
  // age?: string;
  // fhirid?: string;
  // dateOfBirth?: string;
  // gender?: string;
  // race?: string;
  // ethnicity?: string;


   calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  getRace(fhirPatient: Patient): string {
    for (var i = 0; i < fhirPatient.extension.length; i++) {
      if ("http://hl7.org/fhir/us/core/StructureDefinition/us-core-race" === fhirPatient.extension[i].url) {
        for (var ii = 0; ii < fhirPatient.extension[i].extension.length; ii++) {
          if ("text" === fhirPatient.extension[i].extension[ii].url) {
            return fhirPatient.extension[i].extension[ii].valueString;
          }
        }
      }
    }
    return 'UNKNOWN';
  }

  getEthnicity(fhirPatient: Patient): string {
    for (var i = 0; i < fhirPatient.extension.length; i++) {
      if ("http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity" === fhirPatient.extension[i].url) {
        for (var ii = 0; ii < fhirPatient.extension[i].extension.length; ii++) {
          if ("text" === fhirPatient.extension[i].extension[ii].url) {
            return fhirPatient.extension[i].extension[ii].valueString;
          }
        }
      }
    }
    return 'UNKNOWN';
  }

  map2MCCObservation(fhirPatient : Patient) : MccPatient {

this.getRace(fhirPatient );

  var mccPatient : MccPatient = Object.assign(fhirPatient, {
    name: fhirPatient.name[0].text,
    id: fhirPatient.id,
    dateOfBirth: fhirPatient.birthDate,
    age: this.calcAge(fhirPatient.birthDate).toString(),
    race : this.getRace(fhirPatient ),
    ethnicity : this.getEthnicity(fhirPatient)
  });



  var gp =  getReference(fhirPatient.generalPractitioner[0].reference);


  // console.log('updateContacts gp ' + JSON.stringify(gp) );


  fhirPatient.generalPractitioner;
  const emptyContactsasss: Contact[] = [
    {
      type: 'sssss',
      role: 'ssssss',
      name: fhirPatient.generalPractitioner[0].display,
      phone: 'ssssss',
      email: 'sss',
      address: 'ssss'
    }
  ];
  mccPatient.contacts = emptyContactsasss;

    return mccPatient;


  }



  getConditions(id: string): Observable<ConditionLists> {
    const url = `${environment.mccapiUrl}${this.conditionSummaryURL}?subject=${id}`;

    return this.http.get<ConditionLists>(url, this.httpOptions).pipe(
      tap((_) => { this.log; console.log("Fetched Conditions", _); }),
      catchError(this.handleError<ConditionLists>('getConditions'))
    );

  }
  getSocialConcerns(id: string, careplan: string): Observable<SocialConcern[]> {
    const url = `${environment.mccapiUrl}${this.concernURL}?subject=${id}${careplan ? '&careplan=' + careplan : ''}`;

    return this.http.get<SocialConcern[]>(url, this.httpOptions).pipe(
      tap(_ => this.log('fetched Concern')),
      catchError(this.handleError<SocialConcern[]>('getSocialConcerns', []))
    );

  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`subject-data-service: ${message}`);
  }


}

