const { Router } = require("express");
const router = Router();
const {
  createColor,
  getProductByColor,
  deleteColor,
  getAllColors,
} = require("../controllers/colors");

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newColor = await createColor(name);
    res.status(201).send("Color created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { color } = req.query;
  try {
    let colors;
    if (!color) colors = await getAllColors();
    else colors = await getProductByColor(color);
    if (!colors.length) res.status(400).send("color not found");
    else res.status(200).json(colors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeColor = await deleteColor(id);
    res.status(200).json(removeColor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
