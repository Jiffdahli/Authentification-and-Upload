import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "./types";
import { readUsers } from "./data";

/**
 * Einfaches Logging-Middleware (optional).
 */
export function logRequest(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.url}`);
  next();
}

/**
 * Auth-Middleware: prüft, ob ein gültiger Benutzer-Cookie gesetzt ist.
 * Erwartet ein Cookie `username` mit einem existierenden Nutzer.
 */
export function requireAuth(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const username = (req as any).cookies?.username; // cookie-parser fügt `cookies` hinzu

  if (!username || typeof username !== "string") {
    return res.sendStatus(401);
  }

  const users = readUsers();
  const user = users[username];

  if (!user) {
    return res.sendStatus(401);
  }

  req.user = user;
  next();
}