const { Router } = require("express");
const router = Router();
const { createTag, getAllTags, deleteTag } = require("../controllers/tags");

//? POST GET DELETE
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newTag = await createTag(name);
    res.status(201).send("Tag created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tags = await getAllTags();
    if (!tags.length) res.status(400).send("tags not found");
    else res.status(200).json(tags);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeTag = await deleteTag(id);
    res.status(200).json(removeTag);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
