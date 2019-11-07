import { ICategory } from './category';

export interface IRole {
    Name: string;
    Categories: Array<ICategory>
}