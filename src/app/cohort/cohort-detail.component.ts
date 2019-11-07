import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CohortService } from './cohort.service';
import { ICohort } from './cohort';

@Component({
  templateUrl: './cohort-detail.component.html',
  styleUrls: ['./cohort-detail.component.scss']
})
export class CohortDetailComponent implements OnInit {
  pageTitle = 'Cohort Expectations';
  errorMessage: string;
  cohortLevel: string;
  nextCohortLevel: string;

  cohort: ICohort;
  nextCohort: ICohort;

  selection = 'professional';

  constructor(private route: ActivatedRoute,
    private cohortService: CohortService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.cohortLevel = this.route.snapshot.params.Type;
    if (this.cohortLevel) {
      this.getCohort();
      this.getNextCohort();
    }
  }

  getCohort() {
    this.cohortService.getCohort().subscribe(
      data => {
        this.cohort = data[this.cohortLevel]
        console.log(this.cohort)
      }
    )
  }

  getNextCohort() {
    if (this.cohortLevel == "Jr Staff Member") {
      this.nextCohortLevel = 'Staff Member'
    } else if (this.cohortLevel == 'Staff Member') {
      this.nextCohortLevel = 'Sr Staff Member'
    } else if (this.cohortLevel == 'Sr Staff Member') {
      this.nextCohortLevel = 'Consultant'
    } else if (this.cohortLevel == 'Consultant') {
      this.nextCohortLevel = 'Sr Consultant'
    } else if (this.cohortLevel == 'Sr Consultant') {
      this.nextCohortLevel = 'Associate'
    } else if (this.cohortLevel == 'Associate') {
      this.nextCohortLevel = 'Sr Associate'
    } else if (this.cohortLevel == 'Sr Associate') {
      this.nextCohortLevel = 'Manager'
    } else if (this.cohortLevel == 'Manager') {
      this.nextCohortLevel = 'Sr Manager'
    } else if (this.cohortLevel == 'Sr Manager') {
      this.nextCohortLevel = 'Principal'
    } else if (this.cohortLevel == 'Principal') {
      this.nextCohortLevel = 'Sr Principal'
    } else if (this.cohortLevel == 'Sr Principal') {
      this.nextCohortLevel = 'Vice President'
    } else if (this.cohortLevel == 'Vice President') {
      this.nextCohortLevel = 'CxO'
    } else {
      this.nextCohortLevel = 'GOD MODE'
    }

    // switch (this.cohortLevel) {
    //   case "Jr Staff Member": this.nextCohortLevel = 'Staff Member'; break;
    //   case "Staff Member": this.nextCohortLevel = "Sr Staff Member"; break;
    //   case "Sr Staff Member": this.nextCohortLevel = "Consultant"; break;
    //   case "Consultant": this.nextCohortLevel = "Sr Consultant"; break;

    //   default: this.nextCohortLevel = 'GOD MODE'; break;
    // }
    console.log(this.cohortLevel)
    console.log(this.nextCohortLevel)
    this.cohortService.getCohort().subscribe(
      data => {
        this.nextCohort = data[this.nextCohortLevel]
        console.log(this.nextCohort)
      }
    )
  }

  nextProfessional(): void {
    this.router.navigate([{ outlets: { next: ['nextprofessional'] }}]);
  }

  public sendCohort() {
    return this.cohort
  }

  public sendNextCohort() {
    return this.nextCohort
  }

}
