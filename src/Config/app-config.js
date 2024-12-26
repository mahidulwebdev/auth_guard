//  --> dependencies
import express from "express";
import envConfig from "./env-config.js";
import AuthRouter from "../routers/auth-router.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

// --> initalize app
const app = express();

// --> middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
    limit: "10kb",
    parameterLimit: 22,
    inflate: false,
  })
);
app.use(morgan("tiny"));
app.use(cors());
app.use(cookieParser(envConfig.cookie_secret));

// --> api end point
app.use(`${envConfig?.EndPoint}`, [AuthRouter]);

// --> export
export default app;
