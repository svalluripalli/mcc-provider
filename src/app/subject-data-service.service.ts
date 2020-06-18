import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Demographic } from './datamodel/demographics';
import { MessageService } from './message.service';
import { SocialConcerns} from './datamodel/socialconcerns';

@Injectable({providedIn: 'root'})
export class SubjectDataService{


  private baseURL = 'http://localhost:8080/patient';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }



  /** GET Demographic by id. Return `undefined` when id not found */
  getSubjectNo404<Data>(id: string): Observable<Demographic> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Demographic[]>(url)
      .pipe(
        map(demographics => demographics[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Demographic>(`Subject id=${id}`))
      );
  }

  /** GET Subject by id. Will 404 if id not found */
  getSubject(id: string): Observable<Demographic> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Demographic>(url).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<Demographic>(`getSubject id=${id}`))
    );
  }


  getPateintsSortedByNamne()
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

  getConcerns()
  {
    return SocialConcerns.getBaseConcerns();
     /* return this.socialConcerns; */
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
    this.messageService.add(`HeroService: ${message}`);
  }


}

