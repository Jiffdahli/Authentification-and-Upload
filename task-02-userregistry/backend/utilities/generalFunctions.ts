import { User } from "./types";
import userData from "../json/users.json";
import roles from "../json/roles.json";

/**
 * Extrahierung der Benutzerdaten nach dem Benutzernamen aus der users.json.
 * @param username - Der Benutzername des Benutzers.
 * @returns Die Benutzerdaten oder undefined, wenn der Benutzer nicht gefunden wurde.
 */
export function getUserData(username: string): User | undefined {
    for (let [key,value] of Object.entries(userData) as [string,User] []) {
        if (key === username) {
            return value;
        }
    }
    return undefined;
}

export function getUserRights(userRoles: string[]): string[] {
    let retRights: string[] = [];

    for (let [role, value] of Object.entries(roles)) {
        if ((userRoles.map(role => role.toLowerCase())).includes(role.toLowerCase())) {
            retRights = [...retRights, ... value];
        }
    }

    // Gleiche Eintraege entfernen.
    retRights = retRights.reduce<string[]>((acc, item) => {
        if (!acc.includes(item)) acc.push(item);
        return acc;
    }, []);

    return retRights;
}