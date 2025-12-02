import { TokenWithUser } from "./types";

export const secretKey: string = 'your-secret-key';
export let tokens: TokenWithUser[] = [];

export function setTokens(newTokens: TokenWithUser[]) {
    tokens = newTokens;
}

export function readUsers(): User[] { ... }
export function writeUsers(users: User[]): void { ... }
