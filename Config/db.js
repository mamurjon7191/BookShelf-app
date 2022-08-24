const mongoose = require("mongoose");

const dataBaseUrl = process.env.DATABASE_URL.replace("<password>", "mamur7191");

mongoose.connect(dataBaseUrl, () => {
  console.log("DB is succesfully connected");
});
