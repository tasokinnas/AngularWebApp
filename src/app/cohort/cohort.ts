import { IRole } from './role'

export interface ICohort  {
    Cohort: string;
    Type: string;
    Role: Array<IRole>
  }
  