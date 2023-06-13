const { Router } = require("express");
const router = Router();
const { createSize, getAllSize, deleteSize } = require("../controllers/size");

//? POST GET DELETE
router.post("/", async (req, res) => {
  const { size } = req.body;
  try {
    const newSize = await createSize(size);
    res.status(201).send("Size created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const sizes = await getAllSize();
    if (!sizes.length) res.status(400).send("sizes not found");
    else res.status(200).json(sizes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeSize = await deleteSize(id);
    res.status(200).json(removeSize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
