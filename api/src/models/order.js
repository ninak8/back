const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      idUser: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      productsOrders: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    {
      timestamps: false,
    }
  );
};
