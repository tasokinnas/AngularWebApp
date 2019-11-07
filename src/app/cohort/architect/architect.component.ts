import { Component, OnInit } from '@angular/core';

import { CohortDetailComponent } from '../cohort-detail.component'
import { IRole } from '../role';
import { ICohort } from '../cohort';
import { ICategory } from '../category';
import { IExpectation } from '../expectation';

@Component({
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent implements OnInit {

  cohort: ICohort;
  architect: IRole;

  architectCategory: ICategory;
  architectCategory2: ICategory;
  architectCategory3: ICategory;

  architectFrameworkExpectations: IExpectation[] = [];
  architectFrameworkExpectation: IExpectation;
  architectFrameworkExpectation2: IExpectation;
  architectFrameworkExpectation3: IExpectation;
  architectFrameworkExpectation4: IExpectation;
  architectFrameworkExpectation5: IExpectation;

  architectProblemExpectations: IExpectation[] = [];
  architectProblemExpectation: IExpectation;
  architectProblemExpectation2: IExpectation;
  architectProblemExpectation3: IExpectation;

  architectThoughtExpectations: IExpectation[] = [];
  architectThoughtExpectation: IExpectation;
  architectThoughtExpectation2: IExpectation;

  constructor(private cohortDetailComponent: CohortDetailComponent) {
    // let show = expectation.SubCategory != expectation.Description[0] && expectation.Description != 'NA'
  }

  ngOnInit() {
    this.cohort = this.cohortDetailComponent.cohort;
    this.architect = this.cohort.Role['Architect'];
    console.log(this.architect);

    this.architectCategory = this.architect.Categories['Frameworks & Models'];
    this.architectCategory2 = this.architect.Categories['Problem Solving'];
    this.architectCategory3 = this.architect.Categories['Thought Leadership'];

    this.architectFrameworkExpectation = this.architectCategory.Expectations['Design Principles'];
    this.architectFrameworkExpectation2 = this.architectCategory.Expectations['Feedback Loops'];
    this.architectFrameworkExpectation3 = this.architectCategory.Expectations['System Components'];
    this.architectFrameworkExpectation4 = this.architectCategory.Expectations['Systems Thinking'];
    this.architectFrameworkExpectation5 = this.architectCategory.Expectations['Using Frameworks'];

    this.architectFrameworkExpectations.push(this.architectFrameworkExpectation, this.architectFrameworkExpectation2, this.architectFrameworkExpectation3, this.architectFrameworkExpectation4, this.architectFrameworkExpectation5)
    console.log(this.architectFrameworkExpectations);

    this.architectProblemExpectation = this.architectCategory2.Expectations['Analytical Thinking'];
    this.architectProblemExpectation2 = this.architectCategory2.Expectations['Problem Diagnosis'];
    this.architectProblemExpectation3 = this.architectCategory2.Expectations['Solutions'];

    this.architectProblemExpectations.push(this.architectProblemExpectation, this.architectProblemExpectation2, this.architectProblemExpectation3)
    console.log(this.architectProblemExpectations)

    this.architectThoughtExpectation = this.architectCategory3.Expectations['Elegant Solutions'];
    this.architectThoughtExpectation2 = this.architectCategory3.Expectations['Insights'];

    this.architectThoughtExpectations.push(this.architectThoughtExpectation, this.architectThoughtExpectation2);
    console.log(this.architectThoughtExpectations)
  }

}
