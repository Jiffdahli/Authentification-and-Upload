import fs from "fs";
import path from "path";
import { User } from "./types";

const DB_DIR = path.join(process.cwd(), "json");
const DB_PATH = path.join(DB_DIR, "users.json");

function ensureDB() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_PATH)) {
    const initial: Record<string, User> = {};
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8");
  }
}

export function readUsers(): Record<string, User> {
  ensureDB();

  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    if (!raw.trim()) {
      return {};
    }
    const data = JSON.parse(raw) as Record<string, User>;

    // Normalisieren: egal welche Keys im JSON stehen,
    // wir verwenden immer user.username als Key.
    const normalized: Record<string, User> = {};
    for (const value of Object.values(data)) {
      if (value && typeof value.username === "string") {
        normalized[value.username] = value;
      }
    }

    return normalized;
  } catch (err) {
    console.error("Fehler beim Lesen der users.json:", err);
    return {};
  }
}

export function writeUsers(users: Record<string, User>): void {
  ensureDB();

  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), "utf-8");
  } catch (err) {
    console.error("Fehler beim Schreiben der users.json:", err);
  }
}
