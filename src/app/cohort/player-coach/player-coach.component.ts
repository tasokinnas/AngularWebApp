import { Component, OnInit } from '@angular/core';

import { CohortDetailComponent } from '../cohort-detail.component'
import { IRole } from '../role';
import { ICohort } from '../cohort';
import { ICategory } from '../category';
import { IExpectation } from '../expectation';

@Component({
  templateUrl: './player-coach.component.html',
  styleUrls: ['./player-coach.component.scss']
})
export class PlayerCoachComponent implements OnInit {

  cohort: ICohort;
  playerCoach: IRole;

  playerCoachCategory: ICategory;
  playerCoachCategory2: ICategory;
  playerCoachCategory3: ICategory;

  playerCoachOthersExpectations: IExpectation[] = [];
  playerCoachOthersExpectation: IExpectation;
  playerCoachOthersExpectation2: IExpectation;

  playerCoachYourselfExpectations: IExpectation[] = [];
  playerCoachYourselfExpectation: IExpectation;
  playerCoachYourselfExpectation2: IExpectation;
  playerCoachYourselfExpectation3: IExpectation;

  playerCoachMentoringExpectations: IExpectation[] = [];
  playerCoachMentoringExpectation: IExpectation;
  playerCoachMentoringExpectation2: IExpectation;

  constructor(private cohortDetailComponent: CohortDetailComponent) {
  }

  ngOnInit() {
    this.cohort = this.cohortDetailComponent.cohort;
    this.playerCoach = this.cohort.Role['Player/Coach']
    console.log(this.playerCoach);

    this.playerCoachCategory = this.playerCoach.Categories['Developing Others'];
    this.playerCoachCategory2 = this.playerCoach.Categories['Developing Yourself'];
    this.playerCoachCategory3 = this.playerCoach.Categories['Mentoring'];

    this.playerCoachOthersExpectation = this.playerCoachCategory.Expectations['Developing Team Members (OJT)'];
    this.playerCoachOthersExpectation2 = this.playerCoachCategory.Expectations['Teaching'];
    this.playerCoachOthersExpectations.push(this.playerCoachOthersExpectation, this.playerCoachOthersExpectation2)
    console.log(this.playerCoachOthersExpectations);

    this.playerCoachYourselfExpectation = this.playerCoachCategory2.Expectations['Continuous Feedback'];
    this.playerCoachYourselfExpectation2 = this.playerCoachCategory2.Expectations['Lifetime Learning'];
    this.playerCoachYourselfExpectation3 = this.playerCoachCategory2.Expectations['Self Awareness'];
    this.playerCoachYourselfExpectations.push(this.playerCoachYourselfExpectation, this.playerCoachYourselfExpectation2, this.playerCoachYourselfExpectation3)
    console.log(this.playerCoachYourselfExpectations);

    this.playerCoachMentoringExpectation = this.playerCoachCategory3.Expectations['Feedback'];
    this.playerCoachMentoringExpectation2 = this.playerCoachCategory3.Expectations['Strengths & Needs'];
    this.playerCoachMentoringExpectations.push(this.playerCoachMentoringExpectation, this.playerCoachMentoringExpectation2)
    console.log(this.playerCoachMentoringExpectations);
  }

}
