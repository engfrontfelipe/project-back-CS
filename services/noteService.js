const NoteRepository = require("../repositories/noteRepository");

const NoteService = {
  createNote: async (data) => {
    const result = await NoteRepository.create(data);
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await NoteRepository.delete(id)
    return result.rows[0];
  }

}

module.exports = NoteService