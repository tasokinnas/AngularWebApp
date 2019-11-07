import { IExpectation } from './expectation'

export interface ICategory {
    Name: string;
    Expectations: Array<IExpectation>
}