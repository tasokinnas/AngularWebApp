import { Component, OnInit } from '@angular/core';

import { CohortDetailComponent } from '../cohort-detail.component'
import { IRole } from '../role';
import { ICohort } from '../cohort';
import { ICategory } from '../category';
import { IExpectation } from '../expectation';

@Component({
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.scss']
})
export class AdvisorComponent implements OnInit {

  cohort: ICohort;
  advisor: IRole;

  advisorCategory: ICategory;
  advisorCategory2: ICategory;
  advisorCategory3: ICategory;
  advisorCategory4: ICategory;
  advisorCategory5: ICategory;

  advisorAdvocateExpectations: IExpectation[] = [];
  advisorAdvocateExpectation: IExpectation;
  advisorAdvocateExpectation2: IExpectation;

  advisorCommunityExpectations: IExpectation[] = [];
  advisorCommunityExpectation: IExpectation;
  advisorCommunityExpectation2: IExpectation;

  advisorConnectExpectations: IExpectation[] = [];
  advisorConnectExpectation: IExpectation;
  advisorConnectExpectation2: IExpectation;
  advisorConnectExpectation3: IExpectation;

  advisorIntegrityExpectations: IExpectation[] = [];
  advisorIntegrityExpectation: IExpectation;
  advisorIntegrityExpectation2: IExpectation;

  advisorPartnershipExpectations: IExpectation[] = [];
  advisorPartnershipExpectation: IExpectation;
  advisorPartnershipExpectation2: IExpectation;

  constructor(private cohortDetailComponent: CohortDetailComponent) { }

  ngOnInit() {
    this.cohort = this.cohortDetailComponent.cohort;
    this.advisor = this.cohort.Role['Advisor'];
    console.log(this.advisor);

    this.advisorCategory = this.advisor.Categories['Advocating Services'];
    this.advisorCategory2 = this.advisor.Categories['Community Stewardship'];
    this.advisorCategory3 = this.advisor.Categories['Connecting with People'];
    this.advisorCategory4 = this.advisor.Categories['Integrity'];
    this.advisorCategory5 = this.advisor.Categories['Partnership'];

    this.advisorAdvocateExpectation = this.advisorCategory.Expectations['Allata Value Proposition'];
    this.advisorAdvocateExpectation2 = this.advisorCategory.Expectations['Sales Process'];
    this.advisorAdvocateExpectations.push(this.advisorAdvocateExpectation, this.advisorAdvocateExpectation2)
    console.log(this.advisorAdvocateExpectations);

    this.advisorCommunityExpectation = this.advisorCategory2.Expectations['Individual Community Service'];
    this.advisorCommunityExpectation2 = this.advisorCategory2.Expectations['Not for Profit Participation & Leadership'];
    this.advisorCommunityExpectations.push(this.advisorCommunityExpectation, this.advisorCommunityExpectation2);
    console.log(this.advisorCommunityExpectations);

    this.advisorConnectExpectation = this.advisorCategory3.Expectations['Business Networking'];
    this.advisorConnectExpectation2 = this.advisorCategory3.Expectations['One-to-Many (External)'];
    this.advisorConnectExpectation3 = this.advisorCategory3.Expectations['One-to-Many (Internal)'];
    this.advisorConnectExpectations.push(this.advisorConnectExpectation, this.advisorConnectExpectation2, this.advisorConnectExpectation3);
    console.log(this.advisorConnectExpectations);

    this.advisorIntegrityExpectation = this.advisorCategory4.Expectations['Business Integrity'];
    this.advisorIntegrityExpectation2 = this.advisorCategory4.Expectations['Ethics'];
    this.advisorIntegrityExpectations.push(this.advisorIntegrityExpectation, this.advisorIntegrityExpectation2);
    console.log(this.advisorIntegrityExpectations);

    this.advisorPartnershipExpectation = this.advisorCategory5.Expectations['External'];
    this.advisorPartnershipExpectation2 = this.advisorCategory5.Expectations['Internal'];
    this.advisorPartnershipExpectations.push(this.advisorPartnershipExpectation, this.advisorPartnershipExpectation2);
    console.log(this.advisorPartnershipExpectations);
  }

}
