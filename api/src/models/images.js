const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Images",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
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
