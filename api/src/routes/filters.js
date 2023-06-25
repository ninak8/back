const { Router } = require("express");
const router = Router();

const {
  filterByCategory,
  filterByScore,
  filteredByCategoryAndName,
  filterAccessories,
} = require("../controllers/filters");

router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const { q } = req.query;
  try {
    let result;
    // if (
    //   (category === "accesorio" && q === "fútbol") ||
    //   q === "vóley" ||
    //   q === "básquet"
    // ) {
    //   console.log("vamooooooooo");
    //   result = await filterAccessories(category, q);
    // }
    if (category && q) {
      result = await filteredByCategoryAndName(category, q);
    } else {
      result = await filterByCategory(category);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const score = await filterByScore();
    res.status(200).json(score);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
