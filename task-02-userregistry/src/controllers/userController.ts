import { Request, Response } from "express";
import { readUsers, writeUsers } from "../utilities/data";
import { hashPassword, comparePassword } from "../utilities/cryptoHelper";
import { User } from "../utilities/types";

/**
 * POST /register
 * Registriert einen neuen Benutzer
 */
export function registerUserController(req: Request, res: Response) {
    const { username, password } = req.body;

    // 1. Validierung
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username und Passwort müssen angegeben werden." });
    }

    // 2. User-Datenbank laden
    const users = readUsers();

    // 3. Prüfen ob Username bereits existiert
    const existingUser = users.find((u: User) => u.username === username);
    if (existingUser) {
        return res
            .status(409)
            .json({ error: "Benutzer existiert bereits." });
    }

    // 4. Passwort hashen
    const hashed = hashPassword(password);

    // 5. Neuen User erstellen
    const newUser: User = {
        id: Date.now(),
        username,
        password: hashed,
    };

    // 6. Speichern in "Datenbank"
    users.push(newUser);
    writeUsers(users);

    // 7. Erfolg zurückgeben
    res.status(201).json({
        message: "Benutzer erfolgreich registriert.",
        user: { id: newUser.id, username: newUser.username }
    });
}


/**
 * POST /login
 * Loggt einen User ein
 */
export function loginUserController(req: Request, res: Response) {
    const { username, password } = req.body;

    // 1. Validierung
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username und Passwort müssen angegeben werden." });
    }

    // 2. User-Datenbank lesen
    const users = readUsers();

    // 3. User suchen
    const user = users.find((u: User) => u.username === username);
    if (!user) {
        return res.status(401).json({ error: "Ungültige Anmeldedaten." });
    }

    // 4. Passwort vergleichen
    const passwordCorrect = comparePassword(password, user.password);
    if (!passwordCorrect) {
        return res.status(401).json({ error: "Ungültige Anmeldedaten." });
    }

    // 5. Erfolg
    res.status(200).json({
        message: "Login erfolgreich",
        user: { id: user.id, username: user.username }
    });
}
