const express = require("express");
const cors = require("cors");
const { morgan, defaultError, errorCatcher } = require("./middlewares");
const { studentRouter } = require("./routes");

const app = express();

app.use(cors());
app.use(morgan.morganLogger(morgan.morganSetup));
app.use(express.json());
app.use("/students", studentRouter);
app.use("/", defaultError);
app.use("/", errorCatcher);

module.exports = app;
