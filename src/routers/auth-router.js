// --> dependencies
import express from "express";
import loginController from "../Controller/login-controller.js";
import signupController from "../Controller/signup-controller.js";
import verifyToken from "../Config/verify_token-config.js";
import { getUser } from "../Controller/user-controller.js";
import logout from "../Controller/logout-controller.js";

// --> initialize AuthRouter
const AuthRouter = express.Router();

// --> auth routes

// ["/login"]
AuthRouter.route("/login").post(loginController);

// ["/signup"]
AuthRouter.route("/signup").post(signupController);

// ["/logout"]
AuthRouter.route("/logout").get(verifyToken, logout);

// ["/user"]
AuthRouter.route("/user")
  .get(verifyToken, getUser)
    .patch(verifyToken, async (req, res) => {
      //   req.app.lo
      // const 
  });

// --> export
export default AuthRouter;
