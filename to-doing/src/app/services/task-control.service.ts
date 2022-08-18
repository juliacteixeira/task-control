import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IReturnData, ITask } from 'src/utils/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskControlService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IReturnData> {
    return this.http.get<any>(`${environment.apiUrl}/tarefas`).pipe(
      map((data: IReturnData) => {
        return data;
      })
    );
  }

  getTask(id: string): Observable<IReturnData> {
    return this.http.get<any>(`${environment.apiUrl}/tarefas/` + id).pipe(
      map((data: IReturnData) => {
        return data;
      })
    );
  }

  update(id: String, data: ITask): Observable<ITask> {
    return this.http
      .put<ITask>(`${environment.apiUrl}/edit-tarefa/` + id, data)
      .pipe(
        tap((data) => console.log(data)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  postNewTask(data: ITask): Observable<ITask>{
    return this.http.post<ITask>(`${environment.apiUrl}/tarefas`, data).pipe(
      tap((data) => (data)),
      catchError((error) => {
        return throwError(() => error)
      })
    )
  }

  deleteTask(id:string): Observable<ITask> {
    return this.http.delete<ITask>(`${environment.apiUrl}/delete-tarefa/` + id).pipe(
      tap((data) => (data)),
      catchError((error) => {
        return throwError(() => error)
      })
    )
  }

}
