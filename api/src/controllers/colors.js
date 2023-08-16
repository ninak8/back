const { Color, Op } = require("../db");

const createColor = async (name) => {
    const newColor = await Color.create({ name });
    return newColor;
  },
  getAllColors = async () => {
    const allColors = await Color.findAll();
    return allColors;
  },
  getProductByColor = async (color) => {
    const productWithColor = await Color.findAll({
      where: {
        name: {
          [Op.iLike]: `%${color}%`,
        },
      },
    });
    return productWithColor;
  },
  changeColors = async (id, name) => {
    const colorById = await Color.findByPk(id);
    const changeColor = await colorById.update({
      name: name,
    });
    return changeColor;
  },
  deleteColor = async (id) => {
    const hasColor = await Color.findByPk(id);
    await hasColor.destroy();
    return hasColor;
  };

module.exports = {
  createColor,
  getAllColors,
  getProductByColor,
  changeColors,
  deleteColor,
};
