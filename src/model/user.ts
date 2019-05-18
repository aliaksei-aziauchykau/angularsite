import { Role } from './role';

export interface User extends BaseUser {
  email?: string;
  name?: string;
  roles?: Role[];
  joined?: Date;
  seen?: Date;
  password?: string;
  discipline?: string;
  numberOfForms: number;
}

export interface BaseUser {
  _id?: string;
}
