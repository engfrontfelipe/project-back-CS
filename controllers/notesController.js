const NoteService = require("../services/noteService");
const { create } = require("./clientController");

const NoteController = {
    getAll: async (req, res) => {
        try {
            const notes = await NoteService.getAll();
            res.json(notes);
        } catch (err) {
            console.error("Erro ao listar notas:", err);
            res.status(500).json({ message: "Erro ao listar notas" });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedNote = await NoteService.delete(id);
            if (!deletedNote) {
                return res.status(404).json({ message: "Nota não encontrada" });
            }
            res.json(deletedNote);
        } catch (err) {
            console.error("Erro ao deletar nota:", err);
            res.status(500).json({ message: "Erro ao deletar nota" });
        }
    },

    create: async (req, res) => {
        const { titulo, corpo, cliente_id } = req.body;
        try {
            const newNote = await NoteService.createNote({ titulo, corpo, cliente_id });
            res.status(201).json(newNote);
        } catch (err) {
            console.error("Erro ao criar nota:", err);
            res.status(500).json({ message: "Erro ao criar nota" });
        }
    }

}

module.exports = NoteController;