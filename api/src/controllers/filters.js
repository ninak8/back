const { Product } = require("../db");
const { Op } = require("sequelize");

const filterByCategory = async (category) => {
  const products = await Product.findAll({
    where: {
      category: category,
    },
  });
  return products;
};

const filterByScore = async () => {
  const maxFour = await Product.findAll({ where: { score: "5" } });
  return maxFour;
};

const filteredByCategoryAndName = async (category, name) => {
  const products = await Product.findAll({
    where: {
      [Op.and]: [{ category: category }, { name: name }],
    },
  });
  return products;
};

module.exports = {
  filterByCategory,
  filterByScore,
  filteredByCategoryAndName,
};
