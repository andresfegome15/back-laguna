const { db } = require("./utils/db");

const { app } = require("./app");
const { relationModels } = require("./models/relation.models");

db.authenticate()
  .then(() => console.log("db autenticada"))
  .catch(error => console.log(error));
relationModels();

db.sync()
  .then(() => console.log("db sync done"))
  .catch(error => console.log(error));

app.listen(200, () => {
  console.log("Liga caribe runing in port 200");
});
