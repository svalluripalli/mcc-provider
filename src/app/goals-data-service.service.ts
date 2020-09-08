import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Http } from '@angular/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';

import {environment} from '../environments/environment';
import {GoalLists, GoalTarget, MccGoal, MccObservation} from './generated-data-api';
import {TargetValue} from './datamodel/targetvalue';

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


  getMostRecentObservationResult(patientId: string, code: string): Observable<MccObservation> {
    const url = `${environment.mccapiUrl}${this.observationURL}?subject=${patientId}&code=${code}`;
    return this.http.get<MccObservation>(url).pipe(
      tap(_ => this.log(`fetched MccObservation patientId=${patientId} code=${code}`)),
      catchError(this.handleError<MccObservation>(`getMostRecentObservationResult patientId=${patientId} code=${code}`))
    );
  }

  getPatientGoalTargets(patientId: string, goals: GoalLists): Observable<TargetValue[]> {
    const tvs: TargetValue[] = [];
    goals.activeTargets.map(gt => {
      this.getMostRecentObservationResult(patientId, gt.measure.coding[0].code)
        .subscribe(obs => {
          if (obs !== undefined) {
            const tv: TargetValue = {
              measure: gt.measure.text,
              date: '06/01/2020', // todo: Get observation date when API is updated
              mostRecentResult: obs.value !== undefined ? obs.value.quantityValue.value : '',
              target: this.formatTargetValue(gt),
              status: obs.status               // todo: get from call to get latest observation.
            };
            tvs.push(tv);
          }
        });
    });

    return of(tvs);
  }

  formatTargetValue(target: GoalTarget) {
    let formatted = 'Unknown Type: ';
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
