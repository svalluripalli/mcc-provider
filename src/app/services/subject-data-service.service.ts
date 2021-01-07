import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MccPatient } from '../generated-data-api';
import { MessageService } from './message.service';
import { SocialConcern} from '../generated-data-api';
import {environment} from '../../environments/environment';
import {ConditionLists} from '../generated-data-api';


@Injectable({providedIn: 'root'})
export class SubjectDataService{

  baseServer = environment.mccapiUrl;

  private patientURL = '/patient';
  private conditionSummaryURL = '/conditionsummary';
  private concernURL = '/socialconcerns';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }



  /** GET Demographic by id. Return `undefined` when id not found */
  getSubjectNo404<Data>(id: string): Observable<MccPatient> {
    const url = `${environment.mccapiUrl}${this.patientURL}/${id}`;
    return this.http.get<MccPatient[]>(url, this.httpOptions)
      .pipe(
        map(demographics => demographics[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<MccPatient>(`Subject id=${id}`))
      );
  }

  /** GET Subject by id. Will 404 if id not found */
  getSubject(id: string): Observable<MccPatient> {
    console.log(this.httpOptions);
    const url = `${environment.mccapiUrl}${this.patientURL}/${id}`;
    return this.http.get<MccPatient>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<MccPatient>(`getSubject id=${id}`))
    );
  }

  /** GET Subjects by searchString. Will 404 if id not found */
  getSubjects(searchFor: string): Observable<MccPatient>{
    const url = `${environment.mccapiUrl}${this.patientURL}?name=${searchFor}`;
    return this.http.get<MccPatient>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched subject id=${_.id}`)),
      catchError(this.handleError<MccPatient>(`getSubjects searchFor=${searchFor}`))
    );
  }


  getConditions(id: string): Observable<ConditionLists>
  {
    const url = `${environment.mccapiUrl}${this.conditionSummaryURL}?subject=${id}`;

    return this.http.get<ConditionLists>(url, this.httpOptions).pipe(
      tap(_ => this.log('fetched Conditions')),
      catchError(this.handleError<ConditionLists>('getConditions'))
    );

  }
  getSocialConcerns(id: string, careplan: string): Observable<SocialConcern[]>
  {
    const url = `${environment.mccapiUrl}${this.concernURL}?subject=${id}&careplan=${careplan}`;

    return this.http.get<SocialConcern[]>(url, this.httpOptions).pipe(
      tap(_ => this.log('fetched Concern')),
      catchError(this.handleError<SocialConcern[]>('getSocialConcerns', []))
    );

  }
  getPateintsSortedByName()
  {
    /*
    https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_sort=family,given
     */

  }

   getTotalPatients()
   {

     /*
     https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_count=0
     body.total
      */
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

