import { Component, OnInit } from '@angular/core';

import { CohortDetailComponent } from '../cohort-detail.component'
import { IRole } from '../role';
import { ICohort } from '../cohort';
import { ICategory } from '../category';
import { IExpectation } from '../expectation';


@Component({
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderNextComponent implements OnInit {

  cohort: ICohort;
  leader: IRole;

  leaderCategory: ICategory;
  leaderCategory2: ICategory;
  leaderCategory3: ICategory;
  leaderCategory4: ICategory;
  leaderCategory5: ICategory;

  leaderAccountExpectations: IExpectation[] = [];
  leaderAccountExpectation: IExpectation;
  leaderAccountExpectation2: IExpectation;

  leaderAllataExpectations: IExpectation[] = [];
  leaderAllataExpectation: IExpectation;

  leaderProfitExpectations: IExpectation[] = [];
  leaderProfitExpectation: IExpectation;

  leaderProjectExpectations: IExpectation[] = [];
  leaderProjectExpectation: IExpectation;
  leaderProjectExpectation2: IExpectation;
  leaderProjectExpectation3: IExpectation;
  leaderProjectExpectation4: IExpectation;
  leaderProjectExpectation5: IExpectation;
  leaderProjectExpectation6: IExpectation;
  leaderProjectExpectation7: IExpectation;

  leaderServantExpectations: IExpectation[] = [];
  leaderServantExpectation: IExpectation;
  leaderServantExpectation2: IExpectation;
  leaderServantExpectation3: IExpectation;

  constructor(private cohortDetailComponent: CohortDetailComponent) {
  }

  ngOnInit() {
    this.cohort = this.cohortDetailComponent.nextCohort;
    this.leader = this.cohort.Role['Leader'];
    console.log(this.leader);

    this.leaderCategory = this.leader.Categories['Account Leadership'];
    this.leaderCategory2 = this.leader.Categories['Allata Service'];
    this.leaderCategory3 = this.leader.Categories['Profit'];
    this.leaderCategory4 = this.leader.Categories['Project Leadership'];
    this.leaderCategory5 = this.leader.Categories['Servant Leadership'];

    this.leaderAccountExpectation = this.leaderCategory.Expectations['Developing Accounts'];
    this.leaderAccountExpectation2 = this.leaderCategory.Expectations['Planning Accounts'];
    this.leaderAccountExpectations.push(this.leaderAccountExpectation, this.leaderAccountExpectation2);
    console.log(this.leaderAccountExpectations);

    this.leaderAllataExpectation = this.leaderCategory2.Expectations['Internal Activities'];
    this.leaderAllataExpectations.push(this.leaderAllataExpectation);
    console.log(this.leaderAllataExpectations);

    this.leaderProfitExpectation = this.leaderCategory3.Expectations['Profitability'];
    this.leaderProfitExpectations.push(this.leaderProfitExpectation);
    console.log(this.leaderProfitExpectations)

    this.leaderProjectExpectation = this.leaderCategory4.Expectations['Completion of Assignments'];
    this.leaderProjectExpectation2 = this.leaderCategory4.Expectations['Conserves Team Members Efforts'];
    this.leaderProjectExpectation3 = this.leaderCategory4.Expectations['Context setting'];
    this.leaderProjectExpectation4 = this.leaderCategory4.Expectations['Estimating'];
    this.leaderProjectExpectation5 = this.leaderCategory4.Expectations['Managing Issues and Risks'];
    this.leaderProjectExpectation6 = this.leaderCategory4.Expectations['Methods'];
    this.leaderProjectExpectation7 = this.leaderCategory4.Expectations['Planning'];
    this.leaderProjectExpectations.push(this.leaderProjectExpectation, this.leaderProjectExpectation2, this.leaderProjectExpectation3, this.leaderProjectExpectation4, this.leaderProjectExpectation5, this.leaderProjectExpectation6, this.leaderProjectExpectation7)
    console.log(this.leaderProjectExpectations);

    this.leaderServantExpectation = this.leaderCategory5.Expectations['Courageous Follower-ship'];
    this.leaderServantExpectation2 = this.leaderCategory5.Expectations['Golden Rule'];
    this.leaderServantExpectation3 = this.leaderCategory5.Expectations['Others First'];
    this.leaderServantExpectations.push(this.leaderServantExpectation, this.leaderServantExpectation2, this.leaderServantExpectation3)
    console.log(this.leaderServantExpectations);
  }

}
