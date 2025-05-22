const ClienteRepository = require('../repositories/clientRepository');

const ClienteService = {
  createCliente: async (data) => {
    const result = await ClienteRepository.create(data);
    return result.rows[0];
  },

  getAllClientes: async () => {
    const result = await ClienteRepository.findAll();
    return result.rows;
  },

  getClienteById: async (id) => {
    const result = await ClienteRepository.findById(id);
    return result.rows[0];
  },

  updateCliente: async (id, data) => {
    const result = await ClienteRepository.update(id, data);
    return result.rows[0];
  },

  deleteCliente: async (id) => {
    const result = await ClienteRepository.delete(id);
    return result.rows[0];
  },
};

module.exports = ClienteService;
