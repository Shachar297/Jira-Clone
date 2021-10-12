import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from '../components/create-issue/create-issue.component';
import { IssueIdComponent } from '../components/issue-id/issue-id.component';
import { TasksComponent } from '../components/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'create-issue', component : CreateIssueComponent},
  { path: 'issue/:id', component : IssueIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
