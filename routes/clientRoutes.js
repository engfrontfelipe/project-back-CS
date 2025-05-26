const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/clientController");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.post("/clientes/create", authMiddleware, ClienteController.create);
router.get("/clientes", authMiddleware, ClienteController.getAll);
router.get("/clientes/:id", authMiddleware, ClienteController.getById);
router.put("/clientes/:id", authMiddleware, ClienteController.update);
router.delete("/clientes/:id",  authMiddleware, ClienteController.delete);

module.exports = router;
