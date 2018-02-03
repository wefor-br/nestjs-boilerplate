import { AuthProviderEnums } from '../auth/auth.enums';

export interface AuthToken {
    accessToken: string;
    provider: AuthProviderEnums;
}

export interface IUser {
    readonly email: string;
    readonly facebook: string;
    readonly tokens: AuthToken[];

    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly profilePicture: string;
    comparePassword(candidatePassword: string): boolean;
}

export interface ICreateUser {
    email: string;
    password?: string;
    facebook?: string;
    tokens?: AuthToken[];
    firstName?: string;
    lastName?: string;
    gender?: string;
    profilePicture?: string;
}

export interface IUpdateUser {
    email?: string;
    facebook?: string;
    tokens?: AuthToken[];
    firstName?: string;
    lastName?: string;
    gender?: string;
    profilePicture?: string;
}

export interface IFindUserById {
    _id: string;
}
export interface IFindUserByEmail {
    email: string;
}
export interface IFindUserByProvider {
    providerType: AuthProviderEnums;
    providerId: string;
}