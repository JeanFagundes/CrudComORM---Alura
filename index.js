const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`listening on port ${port}`));
