import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/Issue';
import { IssuesService } from 'src/app/services/issues.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-issue-id',
  templateUrl: './issue-id.component.html',
  styleUrls: ['./issue-id.component.css']
})
export class IssueIdComponent implements OnInit {
 
  constructor(
    private stateService: StateService,
    private issueService: IssuesService
    ) { }

  ngOnInit(): void {
  }

    public getIssueById() {
      this.issueService.getIssueById(this.stateService.issueId).subscribe((issue) => {

      })
    }
}
