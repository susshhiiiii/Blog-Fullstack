import express from "express";
import dotenv from "dotenv";
import { ConnectDb } from "./src/config/db.js";
import { NotFoundMiddleware } from "./src/middlewares/notFoundHandler.js";
import { ErrorHandlerMiddleware } from "./src/middlewares/errorHandler.js";
import { PostRouter } from "./src/routes/postRouter.js";

dotenv.config();
await ConnectDb();

const app = express();

//Routes
app.use("/api/post", PostRouter);

//Middlewares
app.use(express.json());
app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App Running on Port number ${PORT}`);
});
