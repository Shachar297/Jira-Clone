import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/Issue';
import { IssueDetails } from '../models/newIssueDetails';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private http: HttpClient) {}

  public getAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('http://localhost:3099/task/');
  }

  public createIssue(issueDetails: IssueDetails): Observable<IssueDetails> {
    return this.http.post<IssueDetails>(
      'http://localhost:3099/task/',
      issueDetails
    );
  }

  public deleteIssue(issueId : number) : Observable<number> {
    return this.http.delete<number>("http://localhost:3099/task/" + issueId);
  }

  public setIssueStatus(issueId : number, statusId : number) : Observable<number> {
    return this.http.put<number>("http://localhost:3099/task/" + issueId, {statusId : statusId})
  }

  public getIssueById(issueId: number) : Observable<number> {
    return this.http.get<number>("http://localhost:3099/task/" + issueId);
  }

}

