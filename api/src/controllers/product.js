const { Product, Tag, Color, Size, Op } = require("../db");

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

const createProduct = async (
  name,
  price,
  stock,
  brand,
  detail,
  description,
  score,
  state,
  category,
  image,
  genre
) => {
  const newProduct = await Product.create({
    name,
    price,
    stock,
    brand,
    detail,
    description,
    score,
    state,
    category,
    image,
    genre,
  });
  return newProduct;
};

const getProducts = async () => {
  const allProducts = await Product.findAll({
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
  const clearDB = clearGet(allProducts);
  return clearDB;
};

const getProductById = async (id) => {
  const productById = await Product.findAll({
    where: { id: id },
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
  const clearDB = clearGet(productById);
  return clearDB;
};

const getProductByName = async (product) => {
  if (
    product === "fútbol" ||
    product === "vóley" ||
    product === "básquet" ||
    product === "rugby" ||
    product === "pádel" ||
    product === "tenis" ||
    product === "hockey" ||
    product === "Boca Juniors" ||
    product === "River Plate" ||
    product === "Selección ARG" ||
    product === "natación"
  ) {
    const productByTag = await Product.findAll({
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
    const clearDB = clearGet(productByTag);
    const selectedTags = clearDB.filter((elem) => elem.tags.includes(product));
    return selectedTags;
  } else if (
    product === "blanco" ||
    product === "negro" ||
    product === "gris" ||
    product === "rosa" ||
    product === "rojo" ||
    product === "azul" ||
    product === "amarillo" ||
    product === "naranja" ||
    product === "verde"
  ) {
    const productByTag = await Product.findAll({
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
    const clearDB = clearGet(productByTag);
    const selectedColors = clearDB.filter((elem) =>
      elem.colors.includes(product)
    );
    return selectedColors;
  } else if (
    product === "S" ||
    product === "M" ||
    product === "L" ||
    product === "XL" ||
    product === "XXL"
  ) {
    const productByTag = await Product.findAll({
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
    const clearDB = clearGet(productByTag);
    const selectedColors = clearDB.filter((elem) =>
      elem.sizes.includes(product)
    );
    return selectedColors;
  }
  const productByName = await Product.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${product}%` } },
        { category: { [Op.iLike]: `%${product}` } },
        { stock: { [Op.iLike]: `%${product}` } },
        { genre: { [Op.iLike]: `%${product}` } },
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
  const clearDB = clearGet(productByName);
  return clearDB;
};

const patchProductById = async (
  id,
  name,
  stock,
  detail,
  description,
  price,
  state,
  category,
  genre,
  brand,
  score,
  image
) => {
  const product = await Product.findByPk(id);
  const muteProduct = await product.update({
    name: name,
    stock: stock,
    detail: detail,
    description: description,
    state: state,
    category: category,
    genre: genre,
    price: price,
    brand: brand,
    score: score,
    image,
  });
  return muteProduct;
};

const deleteProduct = async (id) => {
  const deleteProduct = await Product.findByPk(id);
  await deleteProduct.destroy();
  return deleteProduct;
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductByName,
  patchProductById,
  deleteProduct,
};
