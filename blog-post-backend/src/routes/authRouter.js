import { Router } from "express";
import { RegisterController } from "../controllers/authController.js";

export const AuthRouter = Router();

AuthRouter.post("register",RegisterController)