const { Product, Tag, Size, Color } = require("../db");
const { Op } = require("sequelize");

const clearDB = (array) => {
  const clear = array.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      price: elem.price,
      stock: elem.stock,
      brand: elem.brand,
      detail: elem.detail,
      description: elem.description,
      score: elem.score,
      genre: elem.genre,
      category: elem.category,
      state: elem.state,
      image: elem.image,
      tags: elem.Tags.map((elem) => elem.name),
    };
  });
  return clear;
};

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
  // console.log(products);
  return products;
};

const filterAccessories = async (category, q) => {
  const products = await Product.findAll({
    where: {
      category: category,
    },
    include: [
      {
        model: Tag,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  const clearProducts = clearDB(products);
  return clearProducts;
};
module.exports = {
  filterByCategory,
  filterByScore,
  filteredByCategoryAndName,
  filterAccessories,
};
