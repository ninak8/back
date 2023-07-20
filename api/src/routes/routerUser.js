const { Router } = require("express");
const router = Router();
const {
  createUser,
  getUserById,
  getUsers,
  removeUsers,
  checkUser,
} = require("../controllers/user");
const {
  validateUser,
  validatePostUser,
} = require("../middlewares/middlewareUser");

router.post("/", validatePostUser, async (req, res) => {
  const { name, secret, email, profile_image, account_name } = req.body;
  try {
    const newUser = await createUser(
      name,
      secret,
      email,
      profile_image,
      account_name
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:secret/:email", async (req, res) => {
  const { secret, email } = req.params;
  try {
    if (secret && email) {
      const access = await checkUser(secret, email);
      access.length
        ? res.status(200).send(access)
        : res.status(400).send("Usuario Invalido");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { q } = req.query;
  let user;
  try {
    // console.log(q);
    if (q) user = await getUserById(q);
    user = await getUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removedUser = await removeUsers(id);
    res.status(200).json(removedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
