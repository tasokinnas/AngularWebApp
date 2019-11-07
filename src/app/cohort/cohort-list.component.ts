import { Component, OnInit } from '@angular/core';

import { CohortService } from './cohort.service';
import { ICohort } from './cohort';
import { UsableData } from './usabledata';

@Component({
  templateUrl: './cohort-list.component.html',
  styleUrls: ['./cohort-list.component.scss']
})
export class CohortListComponent implements OnInit {
  pageTitle = 'Select your Cohort Level';
  errorMessage: string;
  jrStaffMember: ICohort;
  staffMember: ICohort;
  srStaffMember: ICohort;
  consultant: ICohort;
  srConsultant: ICohort;
  associate: ICohort;
  srAssociate: ICohort;
  manager: ICohort;
  srManager: ICohort;
  principal: ICohort;
  srPrincipal: ICohort;
  vicePresident: ICohort;
  cxo: ICohort;

  jrStaffMemberExpectation: UsableData;

  cohorts: ICohort[] = [];

  constructor(private cohortService: CohortService) {

  }

  ngOnInit(): void {

    this.cohortService.getCohort().subscribe(
      data => {
        this.jrStaffMember = data['Jr Staff Member'];
        this.staffMember = data['Staff Member'];
        this.srStaffMember = data['Sr Staff Member'];
        this.consultant = data['Consultant'];
        this.srConsultant = data['Sr Consultant'];
        this.associate = data['Associate'];
        this.srAssociate = data['Sr Associate'];
        this.manager = data['Manager'];
        this.srManager = data['Sr Manager'];
        this.principal = data['Principal'];
        this.srPrincipal = data['Sr Principal'];
        this.vicePresident = data['Vice President'];
        this.cxo = data['CxO'];

        this.cohorts.push(this.jrStaffMember);
        this.cohorts.push(this.staffMember);
        this.cohorts.push(this.srStaffMember);
        this.cohorts.push(this.consultant);
        this.cohorts.push(this.srConsultant);
        this.cohorts.push(this.associate);
        this.cohorts.push(this.srAssociate);
        this.cohorts.push(this.manager);
        this.cohorts.push(this.srManager);
        this.cohorts.push(this.principal);
        this.cohorts.push(this.srPrincipal);
        this.cohorts.push(this.vicePresident);
        this.cohorts.push(this.cxo);
        console.log(this.cohorts)

        console.log(this.jrStaffMember.Role)
      },
    )

  }


}
