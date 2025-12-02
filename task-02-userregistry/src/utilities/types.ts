import { Request } from 'express';

export interface TokenWithUser {
    token: string;
    username: string;
}

export interface RequestWithUser extends Request {
  user?: User;
}

export interface User {
  username: string;
  password: string; // bcrypt-Hash
  email: string;
  roles: string[];
}


export interface blocksType {
    index: number;
    extendASCII: boolean;
}

export interface ICrypto {
    startCrypto(data: string): string;
    startDecrypto(data: string): string;
}