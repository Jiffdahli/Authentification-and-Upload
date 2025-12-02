import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import loginRouter from "./routes/loginRouter";
import usersRouter from "./routes/dataRouter";

const app = express();
const portClient = 4400;
const portServer = 3000;

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// CORS (für späteres Frontend)
app.use(
  cors({
    origin: `http://localhost:${portClient}`,
    credentials: true,
  })
);

// API-Routen gemäß Aufgabenstellung:
// POST /api/login
app.use("/api/login", loginRouter);

// GET /api/users, POST /api/users
app.use("/api/users", usersRouter);

app.listen(portServer, () => {
  console.log(`Server läuft auf http://localhost:${portServer}`);
});
