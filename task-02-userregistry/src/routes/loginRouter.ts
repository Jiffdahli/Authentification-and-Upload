import { Router } from "express";
import { loginUserController } from "../controllers/userController";

const router = Router();

// POST /api/login
router.post("/", loginUserController);

export default router;


