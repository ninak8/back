const { Router } = require("express");
const router = Router();
const {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  patchProductById,
  deleteProduct,
} = require("../controllers/product");
const { validate1 } = require("../middlewares/middlewareProduct");
/*
"name": "medias",
      "price": "20.000",
      "stock": "10",
      "brand": "nike",
      "detail": "cuero",
      "description": "ANDA LA COSA POR FAVOR",
      "score": "5",
*/
router.post("/", validate1, async (req, res) => {
  const {
    name,
    price,
    stock,
    brand,
    detail,
    description,
    score,
    state,
    category,
    image,
    genre,
    colors,
    sizes,
    tags,
  } = req.body;
  try {
    const newProduct = await createProduct(
      name,
      price,
      stock,
      brand,
      detail,
      description,
      score,
      state,
      category,
      image,
      genre
    );
    newProduct.addSizes(sizes);
    newProduct.addTags(tags); //array de IDs
    newProduct.addColors(colors);
    res.status(201).send("Product created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { q } = req.query;
  try {
    let products;
    if (!q) products = await getProducts();
    else products = await getProductByName(q);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/", async (req, res) => {
  const {
    name,
    id,
    stock,
    detail,
    description,
    price,
    brand,
    score,
    genre,
    image,
    sizes,
    tags,
    colors,
  } = req.body;
  try {
    const result = await patchProductById(
      id,
      name,
      stock,
      detail,
      description,
      price,
      brand,
      score,
      genre,
      //
      image
      // sizes,
      // tags,
      // colors
    );
    // addTemperaments(temperament)
    result.addSizes(sizes);
    result.addTags(tags); //array de IDs
    result.addColors(colors);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const productDelete = await deleteProduct(id);
    res.status(200).json(productDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --------------------------------------

module.exports = router;
