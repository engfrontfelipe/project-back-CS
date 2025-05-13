require('dotenv').config();
const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Banco de dados
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log('Conectado ao banco de dados Neon'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

// ROTAS
app.post('/clientes/create', async (req, res) => {
  const { nome, seguimento, status, contato, email, cs, prompt, objetivos } = req.body;

  try {
    const result = await client.query(
      `INSERT INTO clientes (nome, seguimento, status, contato, email, cs, prompt, objetivos)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [nome, seguimento, status, contato, email, cs, prompt, objetivos]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar cliente:', err);
    res.status(500).json({ message: 'Erro ao criar cliente' });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao listar clientes:', err);
    res.status(500).json({ message: 'Erro ao listar clientes' });
  }
});

app.get('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT * FROM clientes WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao buscar cliente:', err);
    res.status(500).json({ message: 'Erro ao buscar cliente' });
  }
});

app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, seguimento, status, contato, email, cs, prompt, objetivos } = req.body;

  try {
    const result = await client.query(
      `UPDATE clientes
       SET nome = $1, seguimento = $2, status = $3, contato = $4, email = $5, cs = $6, prompt = $7, objetivos = $8
       WHERE id = $8 RETURNING *`,
      [nome, seguimento, status, contato, email, cs, prompt, id, objetivos]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao atualizar cliente:', err);
    res.status(500).json({ message: 'Erro ao atualizar cliente' });
  }
});

app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente deletado com sucesso', cliente: result.rows[0] });
  } catch (err) {
    console.error('Erro ao deletar cliente:', err);
    res.status(500).json({ message: 'Erro ao deletar cliente' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
