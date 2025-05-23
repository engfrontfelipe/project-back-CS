const express = require("express");
const cors = require("cors");
const clienteRoutes = require("./routes/clientRoutes");

require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/", clienteRoutes);

module.exports = app;
