import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import { CohortListComponent } from './cohort-list.component';
import { CohortDetailComponent } from './cohort-detail.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ArchitectComponent } from './architect/architect.component';
import { LeaderComponent } from './leader/leader.component';
import { PlayerCoachComponent } from './player-coach/player-coach.component';
import { AdvisorComponent } from './advisor/advisor.component'
import { ProfessionalNextComponent } from './professional/professional-next.component';
import { ArchitectNextComponent } from './architect/architect-next.component';
import { LeaderNextComponent } from './leader/leader-next.component';
import { PlayerCoachNextComponent } from './player-coach/player-coach-next.component';
import { AdvisorNextComponent } from './advisor/advisor-next.component';

@NgModule({
  declarations: [
    CohortDetailComponent,
    ProfessionalComponent,
    ArchitectComponent,
    LeaderComponent,
    PlayerCoachComponent,
    AdvisorComponent,
    ProfessionalNextComponent,
    ArchitectNextComponent,
    LeaderNextComponent,
    PlayerCoachNextComponent,
    AdvisorNextComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'cohort', component: CohortListComponent },
      {
        path: 'cohort/:Type', component: CohortDetailComponent,
        children: [
          { path: 'professional', outlet: 'primary', component: ProfessionalComponent },
          { path: 'architect', outlet: 'primary', component: ArchitectComponent },
          { path: 'leader', outlet: 'primary', component: LeaderComponent },
          { path: 'playercoach', outlet: 'primary', component: PlayerCoachComponent },
          { path: 'advisor', outlet: 'primary', component: AdvisorComponent },
          { path: 'nextprofessional', outlet: 'popup', component: ProfessionalNextComponent },
          { path: 'nextarchitect', outlet: 'popup', component: ArchitectNextComponent },
          { path: 'nextleader', outlet: 'popup', component: LeaderNextComponent },
          { path: 'nextplayercoach', outlet: 'popup', component: PlayerCoachNextComponent },
          { path: 'nextadvisor', outlet: 'popup', component: AdvisorNextComponent }
        ]
      },
    ]),
    CommonModule,
    MatTabsModule
  ]
})
export class CohortModule { }
