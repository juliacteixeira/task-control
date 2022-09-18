import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NginxRequestsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${environment.nginxUrl}`, {responseType: 'text'}).pipe(
      map(res => {
        return res;
      })
    ).pipe(
      catchError(err => {
        return throwError(err)
      })
    );
  }
}
