import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ICohort } from './cohort';
import { UsableData } from './usabledata';

@Injectable({
  providedIn: 'root'
})

export class CohortService {
  private cohortUrl = 'api/AGF.json'

  constructor(private http: HttpClient) { }

  getCohort(): Observable<UsableData[]> {
    return this.http.get<UsableData[]>(this.cohortUrl).pipe(

    )
  }

  getAnother(cohortName: string): Observable<any> {
    return this.http.get(this.cohortUrl).pipe(
    )
  }
}