import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Contact, MedicationLists} from '../generated-data-api';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {MedicationSummary} from '../datamodel/old/medicationSummary';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseURL = '/medication';
  private summaryURL = '/medicationsummary';
  private listURL = '/medicationlists';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }

  /** GET medicationsummary by subject id. Will 404 if id not found */
  getMedicationsListsBySubjectAndCareplan(subjectId: string, careplanId: string): Observable<MedicationLists> {
    const url = `${environment.mccapiUrl}${this.listURL}?subject=${subjectId}&careplan=${careplanId}`;
    return this.http.get<MedicationLists>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched Medication Lists id=${subjectId}, careplan=${careplanId}`)),
      catchError(this.handleError<MedicationLists>(`getContacts id=${subjectId}, careplan=${careplanId}`))
    );
  }

  /** GET medicationsummary by subject id. Will 404 if id not found */
  getMedicationsSummary(subjectId: string, careplanId: string): Observable<MedicationSummary[]> {
    const url = `${environment.mccapiUrl}${this.listURL}?subject=${subjectId}&careplan=${careplanId}`;
    return this.http.get<MedicationSummary[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched MedicationSummary id=${subjectId}, careplan=${careplanId}`)),
      catchError(this.handleError<MedicationSummary[]>(`getContacts id=${subjectId}, careplan=${careplanId}`))
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
    this.messageService.add(`contact-service: ${message}`);
  }

}
