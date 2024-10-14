// --> dependencies
import { configDotenv } from 'dotenv';
configDotenv();

// configs
const envConfig = {
  PORT: process.env.PORT,
  EndPoint: process.env.ENDPOINT,
  db: {
    userName:process.env.DBUSERNAME,
    key:process.env.DBKEY,
    dbName:process.env.DBNAME
  }
};

// export
export default envConfig;
