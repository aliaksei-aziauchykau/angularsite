import { Role } from './role';

export interface User extends BaseUser {
  email?: string;
  name?: string;
  roles?: Role[];
  joined?: Date;
  seen?: Date;
  password?: string;
  discipline?: string;
}

export interface BaseUser {
  _id?: string;
}
