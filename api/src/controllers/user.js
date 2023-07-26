const { User, Op } = require("../db");
const createUser = async (name, secret, email, profile_image, account_name) => {
    const newUser = await User.create({
      name,
      secret,
      email,
      profile_image,
      account_name,
    });
    return newUser;
  },
  getUserById = async (id) => {
    const user = await User.findByPk(id);
    // console.log(user);
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
  },
  checkUser = async (secret, email) => {
    const user = await User.findAll({
      where: {
        [Op.and]: [{ email: email }, { secret: secret }],
      },
    });
    return user;
  };

module.exports = {
  createUser,
  getUserById,
  getUsers,
  removeUsers,
  checkUser,
};
