'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personagem.init({
    nome: DataTypes.STRING,
    ataque: DataTypes.INTEGER,
    defesa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personagem',
  });
  return Personagem;
};