import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { AsideComponent } from '../components/aside/aside.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IssueCardComponent } from '../components/issue-card/issue-card.component';
import { CreateIssueComponent } from '../components/create-issue/create-issue.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IssueIdComponent } from '../components/issue-id/issue-id.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    TasksComponent,
    IssueCardComponent,
    CreateIssueComponent,
    IssueIdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
