/*
----> logout controller
*/ 
import User from "../Model/User-model.js";
import { cookie_options } from "../utils/constants-util.js";

const logout = async (req, res) => {
  const _id = req?.id;
  await User.findByIdAndUpdate(
    _id,
    {
      $set: {
        refreshtoken: null,
      },
    },
    {
      new: true,
    }
  );
  res
    .clearCookie("access_token", cookie_options)
    .clearCookie("refresh_token", cookie_options)
    .status(200)
    .send({ status: 200, sucess: true, message: "Sucessfully Logged Out" });
};

export default logout;
