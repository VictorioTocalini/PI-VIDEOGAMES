const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Genre', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  })
}