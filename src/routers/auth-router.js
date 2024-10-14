// --> dependencies
import express from 'express';

// --> initialize AuthRouter
const AuthRouter = express.Router();

// --> auth routes

// ["/login"]
AuthRouter.route('/login').get((req, res) => {
    res.send('iam From Login Route');
    
});

// ["/signup"]
AuthRouter.route('/signup').get((req, res) => {
  res.send('iam From Signup route');
});

// --> export
export default AuthRouter;
