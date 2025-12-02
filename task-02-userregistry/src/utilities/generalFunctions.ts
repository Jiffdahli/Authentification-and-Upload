import fs from "fs";
import path from "path";
import { User } from "./types";
import { readUsers } from "./data";

/**
 * Liest die Rollen-Definitionen aus json/roles.json.
 * Erwartet ein Objekt im Format:
 * {
 *   "admin": ["read", "write", "delete"],
 *   "user": ["read"]
 * }
 */
function readRoles(): Record<string, string[]> {
  const rolesPath = path.join(process.cwd(), "json", "roles.json");

  if (!fs.existsSync(rolesPath)) {
    // Falls die Datei fehlt, leeres Objekt zurückgeben
    return {};
  }

  try {
    const raw = fs.readFileSync(rolesPath, "utf-8");
    if (!raw.trim()) {
      return {};
    }
    return JSON.parse(raw) as Record<string, string[]>;
  } catch (err) {
    console.error("Fehler beim Lesen der roles.json:", err);
    return {};
  }
}

/**
 * Extrahierung der Benutzerdaten nach dem Benutzernamen aus der users.json.
 * @param username - Der Benutzername des Benutzers.
 * @returns Die Benutzerdaten oder undefined, wenn der Benutzer nicht gefunden wurde.
 */
export function getUserData(username: string): User | undefined {
  const usersRecord = readUsers(); // kommt aus data.ts
  return usersRecord[username];
}

/**
 * Ermittelt alle Rechte (Permissions) aus den übergebenen Rollen.
 * @param userRoles - Liste von Rollen, z. B. ["admin", "editor"]
 * @returns Liste aller Rechte ohne Duplikate.
 */
export function getUserRights(userRoles: string[]): string[] {
  const roles = readRoles();
  let retRights: string[] = [];

  const loweredRoles = userRoles.map((r) => r.toLowerCase());

  for (const [roleName, rights] of Object.entries(roles)) {
    if (loweredRoles.includes(roleName.toLowerCase())) {
      // rights ist string[], weil wir roles als Record<string, string[]> typisiert haben
      retRights = [...retRights, ...rights];
    }
  }

  // Duplikate entfernen
  retRights = [...new Set(retRights)];

  return retRights;
}