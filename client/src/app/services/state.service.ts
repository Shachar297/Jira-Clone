import { Injectable } from '@angular/core';
import { Issue } from '../models/Issue';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public customers: String[] = ['Allot', 'Orpak'];
  public statuses: Status[] = [];
  public isAsideCollapsed: boolean = false;
  public issues: Issue[] = [];
  public doneIssues: Issue[] = [];
  public issuesInProgress: Issue[] = [];
  public toDoIssues: Issue[] = [];
  public issueId : number = 0;
  constructor() {
  }
}
