const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getAllOrders,
  getOrder,
  deleteOrder,
} = require("../controllers/orders");

router.post("/", async (req, res) => {
  const { idUser, productsOrders } = req.body;
  try {
    const newOrder = await createOrder(idUser, productsOrders);
    res.status(201).send("Order created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { id } = req.query;
  try {
    let orders;
    if (!id) orders = getAllOrders();
    else orders = getOrder(id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeOrder = await deleteOrder(id);
    res.status(200).json(removeOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
