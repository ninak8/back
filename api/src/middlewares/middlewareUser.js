// verificar con jwt que exista el usuario y validar su email y su secret y así darle permiso a la las rutas
const { User } = require("../db");
const validatePostUser = (req, res, next) => {
    const { name, secret, email, profile_image, account_name } = req.body;
    if (!name) res.status(400).send("Se requiere un nombre");
    if (!secret) res.status(400).send("Se requiere una contraseña");
    if (!email) res.status(400).send("Se requiere un e-mail");
    if (!account_name) res.status(400).send("Se requiere un nombre de usuario");
    if (!profile_image)
      res.status(400).send("Se requiere una imagen de usuario");
    next();
  },
  validateUser = (req, res, next) => {
    const { secret, email } = req.body;
    if (!secret || !email) {
      res.status(400).send("Información incompleta");
    }
    next();
  };

module.exports = {
  validateUser,
  validatePostUser,
};
