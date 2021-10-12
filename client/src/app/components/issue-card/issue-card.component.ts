import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/models/Issue';
import { IssuesService } from 'src/app/services/issues.service';
import { StateService } from 'src/app/services/state.service';
import { StatusesService } from 'src/app/services/statuses.service';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css'],
})
export class IssueCardComponent implements OnInit {
  constructor(
    public stateService: StateService,
    private issueService: IssuesService,
    public statusService: StatusesService,
    private router: Router
  ) {}
  public isEditingStatus: boolean = false;
  public onEditDot : boolean = false;
  @Input() id: number = 0;
  @Input() summary: string = '';
  @Input() Status: string = '';
  @Output() removeIssueChildEvent = new EventEmitter<number>();
  @Output() setStatus = new EventEmitter<number>();
  ngOnInit(): void {
    this.getAllStatuses();
  }

  public removeIssue(issueId: number) {
    console.log(issueId);
    this.removeIssueChildEvent.emit(issueId);
  }
  public getAllStatuses() {
    this.statusService
      .getAllStatuses()
      .subscribe((status) => (this.stateService.statuses = status));
  }

  public onSelectStatus(statusId: any) {
    this.stateService.issueId = this.id
    if(statusId.value) {
      this.setStatus.emit(statusId.value);

    }
    // this.issueService.setIssueStatus(statusId, event.value).subscribe((issue) => {

    // })
  }

  public onEditIssue() {
    this.stateService.issueId = this.id;
    this.router.navigate(["/issue/" + this.id]);

  }
}
