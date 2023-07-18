const { Router } = require("express");
const router = Router();
const {
  getImagesPC,
  getImagesTB,
  getImageMV,
  getAllImges,
  add,
  removeImages,
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
    } else if (q === "MV") {
      images = await getImageMV();
    } else {
      images = await getAllImges();
    }
    res.status(200).json(images);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeImg = await removeImages(id);
    res.status(200).json(removeImg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
