import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, pipe } from 'rxjs';
import { catchError, finalize, map, max, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { environment } from '../../environments/environment';
import { GoalLists, GoalTarget, MccGoal, MccObservation } from '../generated-data-api';

import { TargetValue } from '../datamodel/targetvalue';
import { formatGoalTargetValue } from '../util/utility-functions';
import { VitalSignsTableData } from '../datamodel/vitalSigns';
import { EgfrTableData } from '../datamodel/egfr';
import { UacrTableData } from '../datamodel/uacr';
import { WotTableData } from '../datamodel/weight-over-time';
import { ObservationCollection } from '../generated-data-api/models/ObservationCollection';
import { MccCoding } from "../generated-data-api/models/MccCoding";
import { Constants } from '../common/constants';
import { ObservationsService } from './observations.service';
import { doLog } from '../log';

enum observationCodes {
  Systolic = '8480-6',
  Diastolic = '8462-4',
  Egfr = '69405-9',
  Uacr = '9318-7',
  Wot = '29463-7',
  Blood_pressure = '85354-9'
}

enum observationValuesets {
  // Egfr = '2.16.840.1.113883.3.6929.3.1000',
  Egfr = '2.16.840.1.113762.1.4.1222.179',
  Uacr = '2.16.840.1.113883.3.6929.2.1002'
}

@Injectable({
  providedIn: 'root'
})

export class GoalsDataService {
  // private goalURL = '/goal';
  // private observationURL = '/find/latest/observation';
  // private observationsURL = '/observations';
  // private observationsbyvaluesetURL = '/observationsbyvalueset';
  private segmentedObservationsByValueSetUrl = "/observationssegmented";
  private goalSummaryURL = '/goalsummary';
  // private obsService: ObservationsService

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService, private obsService: ObservationsService) {
  }

  // Get Goals by Subject Id
  getGoalszzzz(id: string): Observable<GoalLists> {
    const url = `${environment.mccapiUrl}${this.goalSummaryURL}?subject=${id}`;
    return this.http.get<GoalLists>(url, this.httpOptions).pipe(
      tap(_ => this.log('fetched Goal Summary')),
	doLog({
          level: 'debug',
          event: 'getGoals',
          page: 'goals-data-service',
          message: `getGoals: success`
        })
      }),
      catchError(this.handleError<GoalLists>('getGoals'))
    );
  }

  // Get Patient Goal Targets by Subject Id and coding
  // Create and return an observable object which emits from the multiple http requests
  // each http request returns a Recent Observation Data
  // associated with a Goal in the GoalTarget[] array passed in
  // The Goal Target and Observation data is merged into a TargetValue object which is emitted
  getPatientGoalTargets(patientId: string, targets: GoalTarget[]): Observable<TargetValue> {
    return new Observable(observer => {
      targets.map(gt => {
        var theCode : string;
        if (gt && gt.measure && gt.measure.coding && gt.measure.coding.length > 0) {
          theCode = gt.measure.coding[0].code;
        } else {
          // make sure we pass a code to api
          theCode = 'xxxx';
        }

        this.getMostRecentObservationResult(patientId, theCode, true)
          .subscribe(obs => {
            let mostRecentResultValue = '';
            let observationDate = '';
            let rowHighlighted = false;
            let formattedTargetValue = '';
            if (obs !== undefined) {
              if (obs.status !== 'notfound') {
                if (obs.value !== undefined) {
                  //  TODO:  Fix to handle as any value type
                  mostRecentResultValue = obs.value.quantityValue.value.toString();
                }
                if (obs.components !== undefined) {
                  obs.components.map(c => {

                    if (c.code && c.code.coding && gt && gt.measure && gt.measure.coding) {


                    if (c.code.coding[0].code === gt.measure.coding[0].code) {
                      if (c.value !== undefined) {
                        mostRecentResultValue = c.value.quantityValue.value.toString();
                      }
                    }
                  }

                  });
                }
                if (obs.effective !== undefined) {
                  if (obs.effective.type === 'dateTime') {
                    observationDate = obs.effective.dateTime.date.toString();
                  }
                }

                [formattedTargetValue, rowHighlighted] = formatGoalTargetValue(gt, mostRecentResultValue);
                const tv: TargetValue = {
                  measure: gt.measure.text,
                  date: observationDate, // todo: Get observation date when API is updated
                  mostRecentResult: mostRecentResultValue.toString(),
                  target: formattedTargetValue,
                  highlighted: rowHighlighted,
                  status: obs.status
                };
                observer.next(tv);
              }
            }
          });
      });
    });
  }

  getPatientVitalSigns(patientId: string): Observable<VitalSignsTableData> {
    return new Observable(observer => {
      this.getObservationsByPanel(patientId, observationCodes.Blood_pressure)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {

          let i: number = 0;
          observations.map(obs => {

            let systolic = 0;
            let diastolic = 0;
            obs.component.map(c => {
              // This works now, may not with different data sets
              switch (c.code.coding[0].code) {
                case observationCodes.Diastolic:
                  diastolic = c.value.quantityValue.value;
                  break;
                case observationCodes.Systolic:
                  systolic = c.value.quantityValue.value;
                  break;
                default:
              }
            });
            const vs: VitalSignsTableData = {
              date: new Date((obs.effective.dateTime.date)),
              diastolic,
              systolic
            };
            observer.next(vs);
          });
        });
    });
  }

  getPatientEgfr(patientId: string): Observable<EgfrTableData> {
    return new Observable(observer => {
      this.getSegementedObservationsByValueSet(patientId, observationValuesets.Egfr, "mL/min/1.73m2,mL/min")
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(obsCollection => {
          obsCollection.observations.map(observations => {
            observations.primaryCode.display = this.formatEGFRCode(observations.primaryCode);
            observations.observations.forEach(obs => {
              const egfr: EgfrTableData = {
                date: new Date(obs.effective.dateTime.date),
                test: observations.primaryCode.display
              };
              switch (obs.value.valueType.toLowerCase()) {
                case "string":
                  egfr.egfr = obs.value.stringValue;
                  egfr.unit = "";
                  egfr.isNumber = false;
                  break;
                case "quantity":
                  egfr.egfr = obs.value.quantityValue.value;
                  egfr.unit = obs.value.quantityValue.unit;
                  egfr.isNumber = true;
                  break;
                default:
                  break;
              }
              observer.next(egfr);
            });
          })
        });
    });
  }

  formatEGFRCode(primaryCode: MccCoding): string {
    //"Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum, Plasma or Blood"
    if (primaryCode.display && primaryCode.display.indexOf("1.73 sq M.") > -1) {
      let formattedString = "";
      formattedString = primaryCode.display.substr(primaryCode.display.indexOf("sq M.") + 5);
      formattedString = formattedString.substr(0, formattedString.indexOf("["));
      formattedString = formattedString + "[" + primaryCode.code + "]";
      formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
      return "EGFR " + formattedString;
    }
    else return primaryCode.display;
  }

  getPatientUacr(patientId: string): Observable<UacrTableData> {
    return new Observable(observer => {
      this.getObservationsByValueset(patientId, observationValuesets.Uacr)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {
          observations.map(obs => {
            const uacr: UacrTableData = {
              date: new Date(obs.effective.dateTime.date),
              uacr: obs.value.quantityValue.value,
              unit: obs.value.quantityValue.unit,
              test: obs.code.text
            };
            observer.next(uacr);
          });
        });
    });
  }

  getPatientWot(patientId: string): Observable<WotTableData> {
    return new Observable(observer => {
      this.getObservations(patientId, observationCodes.Wot)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(observations => {
          observations.map(obs => {
            switch (Constants.featureToggling.preferredUnits.wot) {
              case "kg":
                if (obs.value.quantityValue.unit === "lb") {
                  obs.value.quantityValue.value = +(obs.value.quantityValue.value * 0.453592).toFixed(1);
                  obs.value.quantityValue.unit = "kg";
                }
                break;
              case "lb":
                if (obs.value.quantityValue.unit === "kg") {
                  obs.value.quantityValue.value = +(obs.value.quantityValue.value * 2.20462).toFixed(0);
                  obs.value.quantityValue.unit = "lb";
                }
                break;
            };
            const wot: WotTableData = {
              date: new Date(obs.effective.dateTime.date),
              value: obs.value.quantityValue.value,
              unit: obs.value.quantityValue.unit,
              test: obs.code.text
            };
            observer.next(wot);
          });
        });
    });
  }

  getMostRecentObservationResult(patientId: string, code: string, translate?: boolean): Observable<MccObservation> {
    return from(this.obsService.getObservation(patientId, code)).pipe(
      map(observation => {
        this.map2MCCObservation(observation);
        return observation;
    }));
  }

  map2MCCObservations(observations) {
    return observations.map(observation => this.map2MCCObservation(observation) );
  }
  map2MCCObservation(observation) {


    if (observation.valueQuantity) {
      const quantityValue = {quantityValue : { value: observation.valueQuantity.value, unit : observation.valueQuantity.unit } };
      observation.value = quantityValue;
    }

    if (observation.effectiveDateTime) {
      const effectiveDateTime = { type : 'dateTime',dateTime: { date:observation.effectiveDateTime}  } ;
      observation.effective = effectiveDateTime;
    }

    if (observation.component) {
      observation.component.map(component =>
        this.map2MCCComponents(component)
        );
    }

  }

  map2MCCComponents(component) {
    const quantityValue = {quantityValue : { value: component.valueQuantity.value, unit: component.valueQuantity.unit } };
    component.value = quantityValue;
  }


  getObservations(patientId: string, code: string): Observable<MccObservation[]> {
    return from(this.obsService.getObservations(patientId, code)).pipe(
      map(observation => {
        this.map2MCCObservations(observation);
        return observation;
    })  );
  }

  getObservationsByPanel(patientId: string, code: string): Observable<MccObservation[]> {
    return from(this.obsService.getObservationsByPanel(patientId, code)).pipe(
      map(observation => {
        this.map2MCCObservations(observation);
        return observation;
    })  );

  }

  getObservationsByValueset(patientId: string, valueSet: string): Observable<MccObservation[]> {
    return from(this.obsService.getObservationsByValueSet(patientId, valueSet,'date', '100')).pipe(
      map(observation => {
        this.map2MCCObservations(observation);
        return observation;
    })  );
  }


  getSegementedObservationsByValueSet(patientId: string, valueSet: string, unitTypes?: string): Observable<ObservationCollection> {
    const url = `${environment.mccapiUrl}${this.segmentedObservationsByValueSetUrl}?subject=${patientId}&valueset=${valueSet}&requiredunit=${unitTypes}`;
    return this.http.get<ObservationCollection>(url, this.httpOptions)
      .pipe(catchError(this.handleError(`getSegementedObservationsByValueSet patientId=${patientId} valueSet=${valueSet}`)));
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
