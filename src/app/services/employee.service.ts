import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private databaseApiBaseUrl = environment.databaseApiBaseUrl;
  private employeeDataUrl = `${this.databaseApiBaseUrl}/api/employee`;
  constructor(
    private http : HttpClient
  ) { }

  
  getEmployeeDetails(): Observable<any> {
    let id = 131;
    return this.http.get<any>(this.employeeDataUrl + '/' + id).pipe(
      map((res: any) => res.respose[0]),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Errors Check=",err);
    return throwError(err);
  }

}
