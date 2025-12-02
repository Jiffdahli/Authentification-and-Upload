import { Router } from "express";
import {
  listUsersController,
  registerUserController,
} from "../controllers/userController";
import { requireAuth } from "../utilities/middleware";

const router = Router();

// GET /api/users  - nur für eingeloggte Nutzer
router.get("/", requireAuth, listUsersController);

// POST /api/users - neuen User anlegen (nur eingeloggter Nutzer)
router.post("/", requireAuth, registerUserController);

export default router;

