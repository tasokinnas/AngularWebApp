import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CohortModule } from './cohort/cohort.module';
import { CohortListComponent } from './cohort/cohort-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CohortListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cohort', component: CohortListComponent },
      { path: '', redirectTo: 'cohort', pathMatch: 'full' },
    ]),
    CohortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
