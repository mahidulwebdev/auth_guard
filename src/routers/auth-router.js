// --> dependencies
import express from "express";
import loginController from "../Controller/login-controller.js";
import signupController from "../Controller/signup-controller.js";
import verifyToken from "../Config/verify_token-config.js";
import User from "../Model/User-model.js";
import { getUser } from "../Controller/user-controller.js";

// --> initialize AuthRouter
const AuthRouter = express.Router();

// --> auth routes

// ["/login"]
AuthRouter.route("/login").post(loginController);

// ["/signup"]
AuthRouter.route("/signup").post(signupController);

// ["/user"]
AuthRouter.route("/user").get(verifyToken, getUser);

// --> export
export default AuthRouter;
