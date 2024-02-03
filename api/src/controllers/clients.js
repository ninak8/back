const { Client } = require("../db");

const createClient = async (username, password) => {
    const newClient = await Client.create({ username, password });
    return newClient;
  },
  getAllClients = async () => {
    const allClients = await Client.findAll();
    return allClients;
  },
  deleteClient = async (id) => {
    const removeClient = await Client.findByPk(id);
    await removeClient.destroy();
    return removeClient;
  };

module.exports = {
  createClient,
  getAllClients,
  deleteClient,
};
