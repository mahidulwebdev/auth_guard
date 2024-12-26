import jwt from "jsonwebtoken";
import rsakeys from "../utils/Keys-util.js";
/*
-----> verify token
*/
const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.signedCookies.access_token ||
      req?.cookies?.access_token ||
      req.header("Authorization")?.replace("Bearer ", "");

    //   if token is empty
    if (!token) {
      return res
        .status(401)
        .send({ message: "UnAuthorize Request", status: 401 });
    }

    //   if req bear the token
    const verifyToken = jwt.verify(token, rsakeys("public_access"));
    if (!verifyToken) {
      return res
        .status(403)
        .send({ message: "Error While Verifying", status: 403 });
    } else {
      req.id = verifyToken?._id;
    }
    next();
  } catch (error) {
    console.log("verify Token", error);
  }
};

export default verifyToken;
