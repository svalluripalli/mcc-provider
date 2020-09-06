import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Http } from '@angular/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';

import {environment} from '../environments/environment';
import {GoalLists, MccGoal, MccObservation} from './generated-data-api';

@Injectable({
  providedIn: 'root'
})

export class GoalsDataService {
  private goalURL = '/goal';
  private observationURL = '/find/latest/observation';
  private goalSummaryURL = '/goalsummary';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  // Get Goals by Subject Id
  getGoals(id: string): Observable<GoalLists> {
    const url = `${environment.mccapiUrl}${this.goalSummaryURL}?subject=${id}`;

    return this.http.get<GoalLists>(url).pipe(
      tap(_ => this.log('fetched Conditions')),
      catchError(this.handleError<GoalLists>('getGoals'))
    );

  }

  /** GET Goal by Goal Fhrid. Will 404 if id not found */
  getGoal(id: string): Observable<MccGoal> {
    const url = `${environment.mccapiUrl}${this.goalURL}/${id}`;
    return this.http.get<MccGoal>(url).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<MccGoal>(`getGoal id=${id}`))
    );
  }

  /*
  getLatestObservation(patientId: string, code: string): Observable<MccObservation> {
    const url = `${environment.mccapiUrl}${this.observationURL}?subject=${patientId}&code=${code}`;
    return this.http.get<MccObservation>(url).pipe(
      tap(_ => this.log(`fetched observation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<MccObservation>(`getLatestObservation patientId=${patientId} code=${code}`))
    );
  }
*/
  async getMostRecentObservationResult(patientId: string, code: string): Promise<string> {
    if (patientId && code) {
      const url = `${environment.mccapiUrl}${this.observationURL}?subject=${patientId}&code=${code}`;
      const observation = await this.http.get<MccObservation>(url).toPromise();
      return observation.value.quantityValue.value;
    } else {
      return '';
    }
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
    this.messageService.add(`goal-data-service: ${message}`);
  }

}
