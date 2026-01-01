import { Router } from "express";
import { GetPostController } from "../controllers/postController.js";
export const PostRouter = Router();

PostRouter.get("/", GetPostController);
