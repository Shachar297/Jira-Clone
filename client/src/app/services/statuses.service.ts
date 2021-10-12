import { Injectable } from '@angular/core';
import { Status } from '../models/Status';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
  constructor(private http: HttpClient) {}

  public getAllStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>("http://localhost:3099/status/");
  }
}
