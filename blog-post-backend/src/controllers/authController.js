import expressAsyncHandler from "express-async-handler";
import { UserModel } from "../models/userSchema.js";
import { ERROR_CODES } from "../utils/constants";
import bcrypt from "bcrypt";

export const RegisterController = expressAsyncHandler(async (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    res.status(ERROR_CODES.VALIDATION_ERROR);
    throw new Error("All fields are required");
  }

  const existing_user = await UserModel.findOne({ email });
  if (existing_user) {
    res.status(ERROR_CODES.VALIDATION_ERROR);
    throw new Error("User already exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    name,
    email,
    hashPassword,
  });
  res.status(200).json({
    success: true,
    message: "User Registered Successfully",
    data: user,
  });
});
