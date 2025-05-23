const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then(() => console.log("Conectado ao banco de dados Neon"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

module.exports = client;
