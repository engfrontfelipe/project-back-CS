const NoteRepository = require("../repositories/noteRepository");

const NoteService = {
  createNote: async (data) => {
    const result = await NoteRepository.create(data);
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await NoteRepository.delete(id)
    return result.rows[0];
  },

  getAll: async () => {
    const result = await NoteRepository.getAll();
    return result.rows;
  }

}

module.exports = NoteService