// verificar con jwt que exista el usuario y validar su email y su secret y así darle permiso a la las rutas
const validateUser = (req, res, next) => {
  const { secret, email } = req.body;
  console.log(secret, email);
};

module.exports = {
  validateUser,
};
