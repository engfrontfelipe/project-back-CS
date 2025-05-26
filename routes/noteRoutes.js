const express = require("express");
const router = express.Router();
const NoteController = require("../controllers/notesController");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.get("/notes", authMiddleware, NoteController.getAll);
router.post("/notes/delete/:id", authMiddleware, NoteController.delete);
router.post("/notes/create", authMiddleware,NoteController.create);

module.exports = router;