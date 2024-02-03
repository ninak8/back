const { Order } = require("../db");

const createOrder = async (idUser, productsOrders) => {
    const newOrder = await Order.create({ idUser, productsOrders });
    return newOrder;
  },
  getAllOrders = async () => {
    const allOrders = await Order.findAll();
    return allOrders;
  },
  getOrder = async (id) => {
    const getOrderById = await Order.findByPk(id);
    return getOrderById;
  },
  deleteOrder = async (id) => {
    const removeOrder = await Order.findByPk(id);
    await removeOrder.destroy();
    return removeOrder;
  };

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  deleteOrder,
};
