import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FieldsList } from '../interfaces/fields-list';

@Injectable({
  providedIn: 'root'
})
export class RuleExecutionService {

  private ruleEngineBaseUrl = environment.rulesEngineApiBaseUrl;
  private ruleExecutionUrl = `${this.ruleEngineBaseUrl}/api/employeeRule/validate`;

  constructor(
    private http : HttpClient,
    ) { }

  // executeRuleEngine(): Observable<any> {
    executeRuleEngine(){
    let id = 131;
    console.log("Inside Rule Engine Service Method")
    return this.http.get<any>(this.ruleExecutionUrl + '/' + id).pipe(
      tap((data) => console.log('Rule Data : ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  // TODO - Need to move it into separeate Service File
  getFieldTypeList(){
    return this.http.get<any>('http://localhost:5000/api/fieldType').pipe(
      tap((data) => console.log("Field Data Type =",data)),
      catchError(this.handleError)
    )
  }

  createNewFieldTypeLabel(postData: FieldsList): Observable<any>{
    return this.http.post<FieldsList>(`http://localhost:5000/api/fieldType`,postData).pipe(
      tap((data)=>console.log("Post Data Check=",data)),
      catchError((err: any) => throwError(err))
    )
  }


  private handleError(err: HttpErrorResponse) {
    console.log("Errors Check=",err)
    return throwError(err);
  }
  
}
