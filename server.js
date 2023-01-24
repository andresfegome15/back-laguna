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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Liga caribe runing in port " + PORT);
});
