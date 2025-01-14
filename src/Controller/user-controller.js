/*
------> Get User
*/
import User from "../Model/User-model.js";

const  getUser = async (req, res) => {
  try {
    const id = req?.id;

    // find user
    // const findUser = await User.findById({ _id: id })?.select(
    //   "-passkey -refreshtoken -__v -updatedAt -createdAt"
    // );
    const findUser = await User.findById({ _id: id });

    res.status(200).send({ status: 200, data: findUser });
  } catch (error) {
    console.log("user/get", error);
  }
};

/*
------> Update User
*/
// const updateUser=

export { getUser };
