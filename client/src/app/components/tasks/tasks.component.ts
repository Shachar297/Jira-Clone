import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues.service';
import { StateService } from 'src/app/services/state.service';
import { StatusesService } from 'src/app/services/statuses.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(
    public stateService: StateService,
    public issueService: IssuesService,
    public statusService: StatusesService
  ) {}

  ngOnInit(): void {
    this.getAllIssues();
    this.getAllStatuses();
  }

  public getAllStatuses() {
    this.statusService.getAllStatuses().subscribe((statuses) => {
      this.stateService.statuses = statuses;
    });
  }
  public getAllIssues() {
    this.issueService.getAllIssues().subscribe(
      (issues) => {
        for (let issue = 0; issue < issues.length; issue++) {
          this.calculateStatuses(issues[issue]);
        }
        this.stateService.issues = issues;
        console.log(this.stateService.issues);
      },
      (errorGettingIssues) => {
        alert('Error.');
      }
    );
  }

  private calculateStatuses(issue: any) {
    console.log(issue.status);
    switch (issue.status) {
      case 'Done':
        this.stateService.doneIssues.push(issue);
        break;

      case 'In Progress':
        this.stateService.issuesInProgress.push(issue);

        break;

      case 'To Do':
        this.stateService.toDoIssues.push(issue);

        break;
    }
  }

  public removeIssue(issueId: number) {
    console.log(issueId);
    const confirm = window.confirm(`Are you sure you want to remove Issue AS-${issueId} ? `);
    if(confirm) {
      this.deleteIssue(issueId);
    }
  }


  private deleteIssue(issueId: number) {
    this.issueService.deleteIssue(issueId).subscribe(
      (issue) => {
        this.getAllIssues();
      },
      (err) => {
        alert('Error.');
      }
    );
  }

  setIssueStatus(statusId : number) {
    console.log(statusId, this.stateService.issueId);
    this.issueService.setIssueStatus(this.stateService.issueId, statusId).subscribe((issue) => {
      this.getAllIssues();
    })
  }
}
