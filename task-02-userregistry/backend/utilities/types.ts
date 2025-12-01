import { Request } from 'express';

export interface TokenWithUser {
    token: string;
    username: string;
}

export interfacce RequestWithUser extends Request {
    username?: string
    userdata?: User;
    userRights?: string[];
}
export interface User{
    role: string [];
    username: string;
    password: string;
    email: string;
}

export interface blocksType {
    index: number;
    extendASCII: boolean;
}

export interface ICrypto {
    startCrypto(data: string): string;
    startDecrypto(data: string): string;
}