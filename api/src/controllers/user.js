const { User } = require("../db");

const createUser = async (name, secret, email, profile_image, account_name) => {
    const newUser = await User.create(
      name,
      secret,
      email,
      profile_image,
      account_name
    );
    return newUser;
  },
  getUserById = async (id) => {
    const user = User.findByPk(id);
    return user;
  },
  getUsers = async () => {
    const users = await User.findAll();
    return users;
  },
  removeUsers = async (id) => {
    const user = await User.findByPk(id);
    await user.destroy();
    return user;
  };

module.exports = {
  createUser,
  getUserById,
  getUsers,
  removeUsers,
};
