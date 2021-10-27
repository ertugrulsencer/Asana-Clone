const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const { ProjectRoutes } = require("./api-routes/index");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log("Sunucu ayağa kalktı..");
  app.use("/projects", ProjectRoutes.router);
});
