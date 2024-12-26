// --> dependencies
import { configDotenv } from "dotenv";
configDotenv();

// configs
const envConfig = {
  PORT: process.env.PORT,
  EndPoint: process.env.ENDPOINT,
  db: {
    userName: process.env.DBUSERNAME,
    key: process.env.DBKEY,
    dbName: process.env.DBNAME,
  },
  jwt: {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expire: process.env.ACCESS_TOKEN_EXPIRE,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expire: process.env.REFRESH_TOKEN_EXPIRE,
  },
  cookie_secret: process.env.COOKIE_SECRET,
};

// export
export default envConfig;
