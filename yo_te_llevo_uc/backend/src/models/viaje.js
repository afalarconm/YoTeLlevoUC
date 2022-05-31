'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Viaje.init({
    origen: DataTypes.STRING,
    destino: DataTypes.STRING,
    cupos: DataTypes.INTEGER,
    hora_inicio: DataTypes.DATE,
    detalles: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Viaje',
  });
  return Viaje;
};