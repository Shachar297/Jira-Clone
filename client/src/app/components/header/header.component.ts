import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { StatusesService } from 'src/app/services/statuses.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public stateService: StateService,
    private router: Router,
    public statusService: StatusesService
  ) {}

  ngOnInit(): void {}

  public getAllStatuses() {
    this.statusService.getAllStatuses().subscribe(
      (statuses) => {
        this.stateService.statuses = statuses;
      },
      (error) => {
        alert(error);
      }
    );
  }
  public onCreateIssueButton() {
    this.router.navigate(['/create-issue']);
  }
}
