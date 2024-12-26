// ---> dependencies
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConfig from "../Config/env-config.js";
import rsakeys from "../utils/Keys-util.js";

// ---> Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    avatr: {
      type: String,
      trim: true,
    },
    passkey: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 16,
      //   validate: {
      //     validator: function (passkey) {

      //     }
      // }
    },
    refreshtoken: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

// ---> hook
UserSchema.pre("save", async function (next) {
  const plain_password = this.passkey;
  if (!this.isModified("passkey")) {
    return next();
  }
  this.passkey = await bcrypt.hash(plain_password, 11);
  next();
});

// ---> user schema methods
UserSchema.methods = {
  // match password
  match_passkey: async function (plain_password) {
    return await bcrypt.compare(plain_password, this.passkey);
  },
  // access_token:
  generate_access_token: function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      rsakeys("private_access"),
      {
        expiresIn: envConfig.jwt.access_token_expire,
        algorithm: "RS256",
      }
    );
  },
  // refresh_token
  generate_refresh_token: function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      rsakeys("private_refresh"),
      {
        expiresIn: envConfig.jwt.refresh_token_expire,
        algorithm: "RS256",
      }
    );
  },
};

// ---> model
const User = mongoose.model("users", UserSchema);
// -> export the model
export default User;
