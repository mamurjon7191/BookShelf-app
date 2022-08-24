const dotenv = require("dotenv").config();

const app = require("./middlewares/app");

const port = process.env.PORT;

require("./Config/db");

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
