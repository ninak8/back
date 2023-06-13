const { Size } = require("../db");

const createSize = async (size) => {
  const newSize = await Size.create({ size });
  return newSize;
};
const getAllSize = async () => {
  const allSizes = await Size.findAll();
  return allSizes;
};
const deleteSize = async (id) => {
  const removeSize = await Size.findByPk(id);
  await removeSize.destroy();
  return removeSize;
};

module.exports = {
  createSize,
  getAllSize,
  deleteSize,
};
