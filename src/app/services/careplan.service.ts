import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment} from '../../environments/environment';

import { MccCarePlan } from '../generated-data-api';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})
/* cc-careplan-betsy-ckd */

@Injectable({
  providedIn: 'root'
})
export class CareplanService {

  private baseURL = '/careplan';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }


  /** GET Cqareplan by id. Return `undefined` when id not found */
  getCarePlanNo404<Data>(id: string): Observable<MccCarePlan> {
    const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;
    return this.http.get<MccCarePlan[]>(url, this.httpOptions)
      .pipe(
        map(careplans => careplans[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<MccCarePlan>(`Plan id=${id}`))
      );
  }

  /** GET careplan by id. Will 404 if id not found */
  getCarePlan(id: string): Observable<MccCarePlan> {
    const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;
    return this.http.get<MccCarePlan>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched careplan id=${id}`)),
      catchError(this.handleError<MccCarePlan>(`getCarePlan id=${id}`))
    );
  }

  /** GET careplans by subject id. Will 404 if id not found */
  getCarePlansBySubject(subjectId: string): Observable<MccCarePlan[]> {
    const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}`;
    return this.http.get<MccCarePlan[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched careplan id=${subjectId}`)),
      catchError(this.handleError<MccCarePlan[]>(`getCarePlan id=${subjectId}`))
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
    this.messageService.add(`careplan-service: ${message}`);
  }


}
