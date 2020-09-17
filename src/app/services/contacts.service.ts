import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Contact} from '../generated-data-api';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseURL = '/contact';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }


  /** GET Contact by id. Return `undefined` when id not found */
  getContactNo404<Data>(id: string): Observable<Contact> {
    const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;
    return this.http.get<Contact[]>(url, this.httpOptions)
      .pipe(
        map(contacts => contacts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Contact>(`Plan id=${id}`))
      );
  }

  /** GET contact by id. Will 404 if id not found */
  getContact(id: string): Observable<Contact> {
    const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;
    return this.http.get<Contact>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  /** GET contacts by subject id. Will 404 if id not found */
  getContactsBySubjectAndCareplan(subjectId: string, careplanId: string): Observable<Contact[]> {
    const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}&careplan=${careplanId}`;
    return this.http.get<Contact[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched Contacts id=${subjectId}, careplan=${careplanId}`)),
      catchError(this.handleError<Contact[]>(`getContacts id=${subjectId}, careplan=${careplanId}`))
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
