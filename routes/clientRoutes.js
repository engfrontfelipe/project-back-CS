const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/clientController");

router.post("/clientes/create", ClienteController.create);
router.get("/clientes", ClienteController.getAll);
router.get("/clientes/:id", ClienteController.getById);
router.put("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);

module.exports = router;
