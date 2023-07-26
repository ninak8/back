const { cloudinary } = require("../utils/cloudinary");

const getImageFileURL = async (req, res) => {
  try {
    const { imageStr } = req.body;
    const uploadedResponse = await cloudinary.uploader.upload(imageStr, {
      //   upload_preset: process.env.CR_DEFAULT_FOLDER,
    });
    return res.status(200).json(uploadedResponse.secure_url);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getImageFileURL,
};
