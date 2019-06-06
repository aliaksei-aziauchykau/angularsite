import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    _id: string;
    name: string;
    email: string;
    college: string;
    roles: string[];
    disciplines: string[];
    password: string;
}
