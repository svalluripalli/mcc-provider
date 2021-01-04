import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { ReferralSummary } from '../generated-data-api/models/ReferralSummary';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  private baseURL = '/summary/referrals';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET referrals by subject id. Will 404 if id not found */
  getReferralSummaries(subjectId: string, careplanId: string): Observable<ReferralSummary[]> {
    const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}&careplan=${careplanId}`;
    return this.http.get<ReferralSummary[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched Referral Summaries id=${subjectId}, careplan=${careplanId}`)),
      catchError(this.handleError<ReferralSummary[]>(`getReferralSummaries id=${subjectId}, careplan=${careplanId}`))
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
