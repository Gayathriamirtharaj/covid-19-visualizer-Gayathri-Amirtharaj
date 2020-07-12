import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
}) 
export class CovidDataService {

  constructor(private http: HttpClient) { }
  cdata=[];
  
  getService(): Observable<any> {
    return this.http.get(
      " https://covid19.mathdro.id/api/countries/india/confirmed"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
    }}
