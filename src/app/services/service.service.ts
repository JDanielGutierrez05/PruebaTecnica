import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


declare const $: any;

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  getMedicionSensores(): Observable<any> {
    const url = 'https://s12yrck3eb.execute-api.us-east-2.amazonaws.com/Sensores';

    return this.http
      .get<string>(url).pipe(map(data => {
        return data;
      }))
      .pipe(catchError((err: Response) => {
        return throwError(err);
      }));
  }

}
