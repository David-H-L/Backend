import { Optional } from "sequelize";

export enum UserRole {
    SUPER_ADMIN = 'super_admin',
    ADMIN = 'admin',
    USER = 'user'
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: String;
    phoneNumber: string;
    phoneCountryCode: string;
    country: string;
    city: string;
    email: string;
    role: UserRole;
    password: string;
}

export interface IUserModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: UserRole;
    country?: string;
    city?: string;
}

export interface UserCreationAttributes extends Optional<IUser, 'id'> {}