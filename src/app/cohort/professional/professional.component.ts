import { Component, OnInit, Input } from '@angular/core';

import { CohortDetailComponent } from '../cohort-detail.component'
import { IRole } from '../role';
import { ICohort } from '../cohort';
import { ICategory } from '../category';
import { IExpectation } from '../expectation';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})

export class ProfessionalComponent implements OnInit {

  @Input() selection: string;

  cohort: ICohort;
  professional: IRole;

  professionalCategory: ICategory;
  professionalCategory2: ICategory;
  professionalCategory3: ICategory;

  professionalCommunicationExpectations: IExpectation[] = [];
  professionalCommunicationExpectation: IExpectation;
  professionalCommunicationExpectation2: IExpectation;
  professionalCommunicationExpectation3: IExpectation;
  professionalCommunicationExpectation4: IExpectation;
  professionalCommunicationExpectation5: IExpectation;

  professionalExcellenceExpectations: IExpectation[] = [];
  professionalExcellenceExpectation: IExpectation;

  professionalProExpectations: IExpectation[] = [];
  professionalProExpectation: IExpectation;
  professionalProExpectation2: IExpectation;
  professionalProExpectation3: IExpectation;

  constructor(private cohortDetailComponent: CohortDetailComponent) {
  }

  ngOnInit() {
    this.cohort = this.cohortDetailComponent.cohort;
    if (this.cohort != null) {
      localStorage.setItem("cohort", JSON.stringify(this.cohort));
    } else {
      this.cohort = JSON.parse(localStorage.getItem("cohort"));
    }
    this.professional = this.cohort.Role['Professional'];
    console.log(this.professional)

    this.professionalCategory = this.professional.Categories['Communication']
    this.professionalCategory2 = this.professional.Categories['Excellence']
    this.professionalCategory3 = this.professional.Categories['Professionalism']

    this.professionalCommunicationExpectation = this.professionalCategory.Expectations['Expression'];
    this.professionalCommunicationExpectation2 = this.professionalCategory.Expectations['Listening'];
    this.professionalCommunicationExpectation3 = this.professionalCategory.Expectations['Meetings'];
    this.professionalCommunicationExpectation4 = this.professionalCategory.Expectations['Speaking'];
    this.professionalCommunicationExpectation5 = this.professionalCategory.Expectations['Writing'];

    this.professionalCommunicationExpectations.push(this.professionalCommunicationExpectation);
    this.professionalCommunicationExpectations.push(this.professionalCommunicationExpectation2);
    this.professionalCommunicationExpectations.push(this.professionalCommunicationExpectation3);
    this.professionalCommunicationExpectations.push(this.professionalCommunicationExpectation4);
    this.professionalCommunicationExpectations.push(this.professionalCommunicationExpectation5);
    console.log(this.professionalCommunicationExpectations);

    this.professionalExcellenceExpectation = this.professionalCategory2.Expectations['Professional Will'];
    this.professionalExcellenceExpectations.push(this.professionalExcellenceExpectation);
    console.log(this.professionalExcellenceExpectations);

    this.professionalProExpectation = this.professionalCategory3.Expectations['Company Policies & Processes'];
    this.professionalProExpectation2 = this.professionalCategory3.Expectations['Effective use of time'];
    this.professionalProExpectation3 = this.professionalCategory3.Expectations['Personal Habits'];

    this.professionalProExpectations.push(this.professionalProExpectation);
    this.professionalProExpectations.push(this.professionalProExpectation2);
    this.professionalProExpectations.push(this.professionalProExpectation3);
    console.log(this.professionalProExpectations);
  }

}
