const client = require('../db/client');

const ClienteRepository = {
  create: (data) => {
    const { nome, seguimento, status, contato, email, cs, prompt, objetivos } = data;
    return client.query(
      `INSERT INTO clientes (nome, seguimento, status, contato, email, cs, prompt, objetivos)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [nome, seguimento, status, contato, email, cs, prompt, objetivos]
    );
  },

  findAll: () => client.query('SELECT * FROM clientes'),

  findById: (id) =>
    client.query('SELECT * FROM clientes WHERE id = $1', [id]),

  update: (id, data) => {
    const { nome, seguimento, status, contato, email, cs, prompt, objetivos } = data;
    return client.query(
      `UPDATE clientes
       SET nome = $1, seguimento = $2, status = $3, contato = $4, email = $5, cs = $6, prompt = $7, objetivos = $8
       WHERE id = $9 RETURNING *`,
      [nome, seguimento, status, contato, email, cs, prompt, objetivos, id]
    );
  },

  delete: (id) =>
    client.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]),
};

module.exports = ClienteRepository;
