require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  DB_DEPLOY,
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/md`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Color, Product, Tag, Size, Faqs, Imgs, User, Order, Client } =
  sequelize.models;

Product.belongsToMany(Tag, { through: "Products_Tags" });
Tag.belongsToMany(Product, { through: "Products_Tags" });

Product.belongsToMany(Size, { through: "Products_Sizes" });
Size.belongsToMany(Product, { through: "Products_Sizes" });

Product.belongsToMany(Color, { through: "Products_Colors" });
Color.belongsToMany(Product, { through: "Products_Colors" });

Order.hasOne(Client);
Client.belongsTo(Order);

module.exports = {
  ...sequelize.models,
  Op, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
