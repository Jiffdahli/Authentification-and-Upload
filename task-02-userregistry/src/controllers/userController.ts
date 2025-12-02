import { Request, Response } from "express";
import { readUsers, writeUsers } from "../utilities/data";
import { hashPwdFromUser, comparePwdWithHash } from "../utilities/crypto";
import { User } from "../utilities/types";

/**
 * POST /api/users
 * Registriert einen neuen Benutzer (nur wenn eingeloggt).
 */
export async function registerUserController(req: Request, res: Response) {
  const { username, password, email, roles } = req.body as {
    username?: string;
    password?: string;
    email?: string;
    roles?: string[];
  };

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ error: "Username, Passwort und E-Mail sind erforderlich." });
  }

  const cleanUsername = username.trim();

  const users = readUsers();

  if (users[cleanUsername]) {
    return res.status(409).json({ error: "Benutzer existiert bereits." });
  }

  const hashedPassword = await hashPwdFromUser(password);

  const newUser: User = {
    username: cleanUsername,
    password: hashedPassword,
    email,
    roles: Array.isArray(roles) && roles.length ? roles : ["user"],
  };

  users[cleanUsername] = newUser;
  writeUsers(users);

  return res.status(201).json({
    message: "Benutzer erfolgreich registriert.",
    user: {
      username: newUser.username,
      email: newUser.email,
      roles: newUser.roles,
    },
  });
}

/**
 * POST /api/login
 * Loggt einen Benutzer ein (setzt Cookie).
 */
export async function loginUserController(req: Request, res: Response) {
  const { username, password } = req.body as {
    username?: string;
    password?: string;
  };

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username und Passwort sind erforderlich." });
  }

  const cleanUsername = username.trim();
  const users = readUsers();
  const user = users[cleanUsername];

  if (!user) {
    return res.status(401).json({ error: "Ungültige Anmeldedaten." });
  }

  const ok = await comparePwdWithHash(password, user.password);
  if (!ok) {
    return res.status(401).json({ error: "Ungültige Anmeldedaten." });
  }

  // Cookie setzen (einfache Cookie-Auth, ohne JWT)
  res.cookie("username", cleanUsername, {
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Login erfolgreich.",
    user: {
      username: user.username,
      email: user.email,
      roles: user.roles,
    },
  });
}

/**
 * GET /api/users
 * Gibt alle Benutzer zurück (nur wenn eingeloggt).
 */
export function listUsersController(req: Request, res: Response) {
  const usersRecord = readUsers();
  const usersList = Object.values(usersRecord).map((u) => ({
    username: u.username,
    email: u.email,
    roles: u.roles,
  }));

  return res.status(200).json(usersList);
}

