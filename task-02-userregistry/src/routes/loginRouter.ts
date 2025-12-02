import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    // ... (login logic)
});

import { Router } from "express";
import { loginUserController } from "../controllers/userController";

const router = Router();

router.post("/", loginUserController);

export default router;

