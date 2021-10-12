const express = require("express");
const cors = require("cors");

const taskController = require("./contollers/task-controller")
const statusController = require("./contollers/status-controller")
const server = express();
const port = process.env.PORT || 3099;

server.use(cors({ origin: "http://localhost:4200" }));
server.use(express.json());

server.use("/task", taskController);
server.use("/status", statusController);

server.listen(port, () => console.log("Now Listening to port" + port));