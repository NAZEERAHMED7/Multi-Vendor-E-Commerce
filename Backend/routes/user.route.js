import express from "express";
import upload from "../middleware/multer.js";
import {
  loginUser,
  adminLogin,
  registerUser,
  adminSignup,
  userUpdate
} from "../controllers/user.controller.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

//Login and SignUp for user
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.put("/user-update",upload.single("profileImage"),authUser,userUpdate)

//Login and SignUp for Adimn and Vendors
userRouter.post("/admin-signup",adminSignup)
userRouter.post("/admin-login", adminLogin);



export default userRouter;
