const { Images } = require("../db");

const add = async (image, name) => {
  const idnei = await Images.create({ image, name });
  return idnei;
};

// <---->

const getImagesPC = async () => {
  const imagesPC = await Images.findAll({
    where: {
      name: "PC",
    },
  });
  return imagesPC;
};

const getImagesTB = async () => {
    const imageTablet = await Images.findAll({
      where: {
        name: "TB",
      },
    });
    return imageTablet;
  },
  getImageMV = async () => {
    const imageMovil = await Images.findAll({
      where: {
        name: "MV",
      },
    });
    return imageMovil;
  };

module.exports = {
  add,
  getImagesPC,
  getImagesTB,
  getImageMV,
};
