const { User, Op } = require("../db");

// const clearUser = (arr) => {
//   const clear = arr.map((elem) => {
//     return {
//       id: elem.id,
//       name: elem.name,
//       secret: elem.secret,
//       email: elem.email,
//       profile_image: elem.profile_image,
//       account_name: elem.account_name,
//     };
//   });
//   return clear;
// };

const createUser = async (name, secret, email, profile_image, account_name) => {
    const newUser = await User.create({
      name,
      secret,
      email,
      profile_image,
      account_name,
    });
    // const cleanUser = clearUser(newUser);
    // return cleanUser;
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
