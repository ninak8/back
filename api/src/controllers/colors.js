const { Color, Op } = require("../db");

const createColor = async (name) => {
  const newColor = await Color.create({ name });
  return newColor;
};

const getAllColors = async () => {
  const allColors = await Color.findAll();
  return allColors;
};

const getProductByColor = async (color) => {
  const productWithColor = await Color.findAll({
    where: {
      name: {
        [Op.iLike]: `%${color}%`,
      },
    },
  });
  return productWithColor;
};

const deleteColor = async (id) => {
  const hasColor = await Color.findByPk(id);
  await hasColor.destroy();
  return hasColor;
};

module.exports = {
  createColor,
  getProductByColor,
  deleteColor,
  getAllColors,
};
