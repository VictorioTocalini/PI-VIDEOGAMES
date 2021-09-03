const { DataTypes } = require('sequelize');
// const rating = ['1','2','3','4','5']
module.exports = (sequelize) => {

  sequelize.define('Videogame', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING,
    },
    rating:{
      type: DataTypes.DECIMAL
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    genres:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  });
};
