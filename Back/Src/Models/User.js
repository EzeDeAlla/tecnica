const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direction: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgperfil: {
        type: DataTypes.TEXT,
        allowNull: true,
        // defaultValue: 'https://ibb.co/vxdbDGJ',
      },
    },
    {
      paranoid: true,
      deletedAt: 'destroyTime',
      timestamps: true,
    }
  );
};
