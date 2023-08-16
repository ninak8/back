const { Size } = require("../db");

const createSize = async (size) => {
    const newSize = await Size.create({ size });
    return newSize;
  },
  getAllSize = async () => {
    const allSizes = await Size.findAll();
    return allSizes;
  },
  changeSize = async (id, size) => {
    const sizeById = await Size.findByPk(id);
    const changeSize = await sizeById.update({
      size: size,
    });
    return changeSize;
  },
  deleteSize = async (id) => {
    const removeSize = await Size.findByPk(id);
    await removeSize.destroy();
    return removeSize;
  };

module.exports = {
  createSize,
  getAllSize,
  changeSize,
  deleteSize,
};
