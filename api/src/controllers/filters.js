const { Product, Tag, Size, Color } = require("../db");
const { Op } = require("sequelize");

const clearGet = (arr) => {
  const clear = arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      price: elem.price,
      stock: elem.stock,
      brand: elem.brand,
      detail: elem.detail,
      description: elem.description,
      score: elem.score,
      category: elem.category,
      state: elem.state,
      genre: elem.genre,
      image: elem.image,
      tags: elem.Tags?.map((elem) => elem.name),
      sizes: elem.Sizes?.map((elem) => elem.size),
      colors: elem.Colors?.map((elem) => elem.name),
    };
  });
  return clear;
};

const filterByCategory = async (category) => {
  if (category === "novedades") {
    const productsNew = await Product.findAll({
      where: {
        state: "nuevo",
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });
    const clearNewPorduct = clearGet(productsNew);
    return clearNewPorduct;
  } else if (category === "deporte") {
    const productsSports = await Product.findAll({
      where: {
        stock: category,
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });
    const clearSport = clearGet(productsSports);
    return clearSport;
  } else {
    // console.log(category);
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${category}%` } },
          { category: { [Op.iLike]: `%${category}%` } },
        ],
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });
    const clearProducts = clearGet(products);
    return clearProducts;
  }
};

const filterByScore = async () => {
  const maxFour = await Product.findAll({ where: { score: "5" } });
  return maxFour;
};

const filteredByCategoryAndName = async (category, name) => {
  if (category === "deporte") {
    const productsSports = await Product.findAll({
      where: {
        [Op.and]: [
          { stock: { [Op.iLike]: `%${category}%` } },
          { name: { [Op.iLike]: `%${name}%` } },
        ],
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });
    const clearProduct = clearGet(productsSports);
    return clearProduct;
  }
  const products = await Product.findAll({
    where: {
      [Op.and]: [
        { category: { [Op.iLike]: `%${category}%` } },
        { name: { [Op.iLike]: `%${name}%` } },
      ],
    },
    include: [
      {
        model: Tag,
        attributes: ["name"],
      },
      {
        model: Size,
        attributes: ["size"],
      },
      {
        model: Color,
        attributes: ["name"],
      },
    ],
  });
  const productsClear = clearGet(products);
  return productsClear;
};

const filterAccessories = async (category, q) => {
  if (category === "deporte") {
    const productSport = await Product.findAll({
      where: {
        stock: category,
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });

    const clearProducts = clearGet(productSport);
    const selectedTags = clearProducts.filter((elem) => elem.tags.includes(q));
    return selectedTags;
  } else {
    const products = await Product.findAll({
      where: {
        category: category,
      },
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: Size,
          attributes: ["size"],
        },
        {
          model: Color,
          attributes: ["name"],
        },
      ],
    });
    const clearProducts = clearGet(products);

    const selectedTags = clearProducts.filter((elem) => elem.tags.includes(q));
    return selectedTags;
  }
};
module.exports = {
  filterByCategory,
  filterByScore,
  filteredByCategoryAndName,
  filterAccessories,
};
