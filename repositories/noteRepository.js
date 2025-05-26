const client = require("../db/client");


const NoteRepository = {
  create: (data) => {
    const { titulo, corpo, cliente_id } =
      data;
    return client.query(
      `INSERT INTO notas (titulo, corpo, cliente_id)
       VALUES ($1, $2, $3) RETURNING *`,
      [titulo, corpo, cliente_id],
    );
  },

  delete: (id) =>
    client.query("DELETE FROM notas WHERE id = $1 RETURNING *", [id]),

  getAll: () => {
    return client.query(
      "SELECT * FROM notas"
      
    );
  }

};

module.exports = NoteRepository;