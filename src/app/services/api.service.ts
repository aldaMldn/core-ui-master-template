import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Please change this to your endpoint
  base_path = 'https://dev-api.nanomart.id/'

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      Swal.fire({
        icon: 'error',
        title: 'Oops.. Error!',
        text: error.error.message + ' [' + error.error.code + ']'
      });
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops.. Error!',
      text: error.status + ' [' + error.error.code + ']'
    });
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  //get Data
  getData(): Observable<any> {
    return this.http
      .get(this.base_path + 'admin/products')
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }
}
