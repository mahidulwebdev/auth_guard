/*
-----> login controller
*/
import generateToken from "../Config/generate-config.js";
import User from "../Model/User-model.js";
import { cookie_options } from "../utils/constants-util.js";

const loginController = async (req, res) => {
  try {
    const { email, passkey } = req.body;

    //---> Find User & check
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(401).send({
        message: "Email Address Not Registered Or Incorrect",
        status: 401,
      });
    }

    // ---> match password
    const match_password = await findUser.match_passkey(passkey);
    if (!match_password) {
      return res.status(401).send({
        message: "Password Doesn't Match",
        status: 401,
      });
    }

    // ---> generate access & refresh Token
    const { access_token, refresh_token } = await generateToken(findUser?._id);
    console.log(access_token);

    const logged_user_info = await User.findById({
      _id: findUser?._id,
    })?.select("-passkey -refreshtoken -__v -updatedAt -createdAt");

    //---> send response to the user
    res
      .cookie("refresh_token", refresh_token, cookie_options)
      .cookie("access_token", access_token, cookie_options)
      .status(200)
      .send({
        message: "Sucessfully LoogedIn",
        status: 200,
        data: logged_user_info,
      });
  } catch (error) {
    console.log(error);
  }
};

export default loginController;
