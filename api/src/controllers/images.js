const { Imgs } = require("../db");

const add = async (image, name) => {
  const newImage = await Imgs.create({ image, name });
  return newImage;
};

// <---->

const getImagesPC = async () => {
  const imagesPC = await Imgs.findAll({
    where: {
      name: "PC",
    },
  });
  return imagesPC;
};

const getImagesTB = async () => {
    const imageTablet = await Imgs.findAll({
      where: {
        name: "TB",
      },
    });
    return imageTablet;
  },
  getImageMV = async () => {
    const imageMovil = await Imgs.findAll({
      where: {
        name: "MV",
      },
    });
    return imageMovil;
  },
  removeImages = async (id) => {
    const removeImgByID = await Imgs.findByPk(id);
    await removeImgByID.destroy();
    return removeImgByID;
  },
  getAllImges = async () => {
    const allImages = await Imgs.findAll();
    return allImages;
  };

module.exports = {
  add,
  getImagesPC,
  getImagesTB,
  getImageMV,
  getAllImges,
  removeImages,
};
