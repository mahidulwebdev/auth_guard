import User from "../Model/User-model.js";

const generateToken = async userId => {
  const user = await User.findById({ _id: userId });
  const access_token = await user.generate_access_token();
  const refresh_token = await user.generate_refresh_token();

  user.refreshtoken = refresh_token;
  await user.save({ validateModifiedOnly: true });

  return { access_token, refresh_token };
};

export default generateToken;
