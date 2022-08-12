import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskControlService {
  public apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos`);
  }
}
