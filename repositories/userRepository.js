const client = require('../db/client');

class UserRepository {
  async findByEmail(email) {
    const res = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0];
  }

  async createUser({ email, password }) {
    const res = await client.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    return res.rows[0];
  }
}

module.exports = new UserRepository();
