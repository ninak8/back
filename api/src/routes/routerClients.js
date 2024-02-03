const { Router } = require("express");
const router = Router();
const {
  createClient,
  getAllClients,
  deleteClient,
} = require("../controllers/clients");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newClient = await createClient(username, password);
    res.status(201).send("Client created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clients = await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removeClient = await deleteClient(id);
    res.status(200).json(removeClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
