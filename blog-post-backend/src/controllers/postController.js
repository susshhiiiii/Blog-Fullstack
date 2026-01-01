import expressAsyncHandler from "express-async-handler";
import { PostModel } from "../models/postSchema.js";
import { ResponseMessage } from "../utils/constants.js";

export const GetPostController = expressAsyncHandler(async (req, res) => {
  const post = await PostModel.find();
  res.status(200).json({
    message: ResponseMessage.DATA_FETCH_SUCCESSFULLY,
    data: post,
  });
});
