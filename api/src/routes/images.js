const { Router } = require("express");
const router = Router();
const {
  getImagesPC,
  getImagesTB,
  getImageMV,
  add,
} = require("../controllers/images");

router.post("/", async (req, res) => {
  const { image, name } = req.body;
  try {
    if (name && image) {
      const images = await add(image, name);
      res.status(201).send("imagen creadas");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { q } = req.query;
  try {
    let images;
    if (q === "PC") {
      images = await getImagesPC();
    } else if (q === "TB") {
      images = await getImagesTB();
    } else {
      images = await getImageMV();
    }
    res.status(200).json(images);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
