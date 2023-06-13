const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      stock: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      brand: {
        type: DataTypes.STRING,
      },

      detail: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      score: {
        type: DataTypes.STRING,
      },

      // ++++++++++++++++++++++++

      genre: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // +++++++++++++++++++++++++

      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        // allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
