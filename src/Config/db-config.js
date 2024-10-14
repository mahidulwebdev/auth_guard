// --> dependencies
import mongoose from "mongoose";
import envConfig from "./env-config.js";

// --> db connection func
const connecTodb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${envConfig.db.userName}:${envConfig.db.key}@cluster0.vnqo6jg.mongodb.net/${envConfig.db.dbName}`
    );

    console.log({
      message: "sucessfully connected with DB.",
      host: connectionInstance.connection.host,
      status: 200,
    });
  } catch (error) {
    const err = {
      message: ["Error From Db_Conection", error?.message],
      status: 500,
    };
    console.log(err);
  }
};

// --> export
export default connecTodb;
