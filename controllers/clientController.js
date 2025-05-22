const ClienteService = require('../services/clientService');

const ClienteController = {
  create: async (req, res) => {
    try {
      const cliente = await ClienteService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      console.error('Erro ao criar cliente:', err);
      res.status(500).json({ message: 'Erro ao criar cliente' });
    }
  },

  getAll: async (req, res) => {
    try {
      const clientes = await ClienteService.getAllClientes();
      res.json(clientes);
    } catch (err) {
      console.error('Erro ao listar clientes:', err);
      res.status(500).json({ message: 'Erro ao listar clientes' });
    }
  },

  getById: async (req, res) => {
    try {
      const cliente = await ClienteService.getClienteById(req.params.id);
      if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
      res.json(cliente);
    } catch (err) {
      console.error('Erro ao buscar cliente:', err);
      res.status(500).json({ message: 'Erro ao buscar cliente' });
    }
  },

  update: async (req, res) => {
    try {
      const cliente = await ClienteService.updateCliente(req.params.id, req.body);
      if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
      res.json(cliente);
    } catch (err) {
      console.error('Erro ao atualizar cliente:', err);
      res.status(500).json({ message: 'Erro ao atualizar cliente' });
    }
  },

  delete: async (req, res) => {
    try {
      const cliente = await ClienteService.deleteCliente(req.params.id);
      if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
      res.json({ message: 'Cliente deletado com sucesso', cliente });
    } catch (err) {
      console.error('Erro ao deletar cliente:', err);
      res.status(500).json({ message: 'Erro ao deletar cliente' });
    }
  },
};

module.exports = ClienteController;
