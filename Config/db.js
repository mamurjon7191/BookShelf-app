const mongoose = require("mongoose");

const dataBaseUrl = process.env.DATABASE_URL;
mongoose.connect(dataBaseUrl, () => {
  console.log("DB is succesfully connected");
});
