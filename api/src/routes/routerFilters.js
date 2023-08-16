const { Router } = require("express");
const router = Router();

const {
  filterByCategory,
  filterByScore,
  filteredByCategoryAndName,
  getLeakedInformation,
  filterAccessories,
} = require("../controllers/filters");

router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const { q } = req.query;
  try {
    let result;
    if (
      q === "fútbol" ||
      q === "vóley" ||
      q === "básquet" ||
      q === "rugby" ||
      q === "pádel" ||
      q === "tenis" ||
      q === "hockey" ||
      q === "Boca Juniors" ||
      q === "River Plate" ||
      q === "Selección ARG" ||
      q === "natación"
    ) {
      result = await filterAccessories(category, q);
    } else if (category && q) {
      result = await filteredByCategoryAndName(category, q);
    } else {
      result = await filterByCategory(category);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { size, color, sport, category, genre, name } = req.query;
  try {
    if (size || color || sport || category || genre || name) {
      console.log("entre");
      const leakedInformation = await getLeakedInformation(
        size,
        color,
        sport,
        category,
        genre,
        name
      );
      // console.log(leakedInformation, "-------");
    }
    const score = await filterByScore();
    res.status(200).json(score);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
