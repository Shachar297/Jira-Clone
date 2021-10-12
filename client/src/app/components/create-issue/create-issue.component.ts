import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/models/Issue';
import { IssueDetails } from 'src/app/models/newIssueDetails';
import { IssuesService } from 'src/app/services/issues.service';
import { StateService } from 'src/app/services/state.service';
import { StatusesService } from 'src/app/services/statuses.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  public newIssueDetails = new IssueDetails('', 0);
  constructor(
    public stateService: StateService,
    public statusService: StatusesService,
    public issueService: IssuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllStatuses();
  }

  public getAllStatuses() {
    this.statusService.getAllStatuses().subscribe((statuses) => {
      this.stateService.statuses = statuses;
    });
  }
  public onSelectStatus(status: any) {
    console.log(status.value);
    this.newIssueDetails.statusId = status.value;
  }

  public createIssue() {
    console.log(this.newIssueDetails);
    this.issueService.createIssue(this.newIssueDetails).subscribe(
      (issue) => {
        this.router.navigate(['/']);
      },
      (failed) => {
        alert('Error.');
      }
    );
  }
}
