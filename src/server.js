//  --> dependencies
import app from "./Config/app-config.js";
import connecTodb from "./Config/db-config.js";
import envConfig from "./Config/env-config.js";
import { welcomeMsg } from "./utils/constants-util.js";

// --> inital [home] route & wrong path redirect
app.get(`${envConfig.EndPoint}`, (req, res) => {
  res.status(200).send(welcomeMsg);
});

app.get("*", (req, res) => {
  res.redirect(`${envConfig.EndPoint}`);
});

// --> error handleing middleware
app.use((req, res, next) => {
  const path = req.path;
  res.status(404).send({
    status: 404,
    message: "The requested route does not exist.",
    path,
  });
});

// --> establiched db connection
connecTodb().then(() => {
  // --> listen the port
  app.listen(envConfig.PORT, () => {
    console.log(
      `Server Is Listening On PORT = ${envConfig.PORT}\nhttp://localhost:${envConfig.PORT}/`
    );
  });
});
