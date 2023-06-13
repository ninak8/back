const validate1 = (req, res, next) => {
  const {
    name,
    price,
    stock,
    brand,
    detail,
    description,
    colors,
    state,
    category,
    genre,
    tags,
  } = req.body;
  if (!name) return res.status(400).json({ error: "name missing" });
  if (!price) return res.status(400).json({ error: "price missing" });
  if (!stock) return res.status(400).json({ error: "stock missing" });
  if (!brand) return res.status(400).json({ error: "brand missing" });
  if (!detail) return res.status(400).json({ error: "detail missing" });
  if (!description)
    return res.status(400).json({ error: "description missing" });
  if (!colors) return res.status(400).json({ error: "colors missing" });
  if (!tags) return res.status(400).json({ error: "tags missing" });
  if (!state) return res.status(400).json({ error: "state missing" });
  if (!category) return res.status(400).json({ error: "category missing" });
  if (!genre) return res.status(400).json({ error: "genre missing" });
  next();
};

module.exports = {
  validate1,
};
