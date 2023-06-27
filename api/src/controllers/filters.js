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
    });
    return productsNew;
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
    console.log(clearSport.length);
    return clearSport;
  } else {
    const products = await Product.findAll({
      where: {
        category: category,
      },
    });
    return products;
  }
};

const filterByScore = async () => {
  const maxFour = await Product.findAll({ where: { score: "5" } });
  return maxFour;
};

const filteredByCategoryAndName = async (category, name) => {
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
      ],
    });

    const clearProducts = clearDB(productSport);

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
      ],
    });
    const clearProducts = clearDB(products);

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
