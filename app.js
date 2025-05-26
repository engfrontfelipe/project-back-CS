const express = require("express");
const cors = require("cors");
const clienteRoutes = require("./routes/clientRoutes");
const noteRoutes = require("./routes/noteRoutes");
const authRoutes = require("./routes/authRoutes");


require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api", clienteRoutes);
app.use("/api", noteRoutes);
app.use('/api', authRoutes);

module.exports = app;
