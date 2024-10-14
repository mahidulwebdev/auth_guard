//  --> dependencies
import express from 'express';
import envConfig from './env-config.js';
import AuthRouter from '../routers/auth-router.js';

// --> initalize app
const app = express();

// --> middlewares
app.use(express.json());

// --> api end point
app.use(`${envConfig?.EndPoint}`, [AuthRouter]);

// --> export
export default app;
