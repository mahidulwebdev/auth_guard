/*
-----> Signup controller
*/
import User from "../Model/User-model.js";
const signupController = async (req, res) => {
  try {
    const { username, email, password, confirmPass } = req.body;

    // ---> check is user name is already taken or not
    const check_user = await User.findOne({ $or: [{ username }, { email }] });

    // console.log(username, email, password, confirmPass);
    res.end();

    if (check_user) {
      return res
        .status(209)
        .send({ message: "User Name Or Email Already Taken", status: 209 });
    }

    // ---> match password and confirm password
    if (password.trim() !== confirmPass.trim()) {
      return res.status(400).send({
        message: "Password And Confirm Password Does't Match",
        status: 400,
      });
    }

    // ---> create user
    const create_user = await User.create({
      username,
      email,
      passkey: password,
    });

    // ---> Find user
    if (!create_user) {
      return res.status(500).send({
        message: "Something Went To Wrong User Couldnot Created",
        status: 500,
      });
    }

    // success response
    res
      .status(201)
      .send({ message: "Sucessfully Created The User", status: 201 });
  } catch (error) {
    res.end();
    console.error(error.message);
  }
};

export default signupController;
