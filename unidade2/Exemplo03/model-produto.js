import { Sequelize } from "sequelize";
import db from "./db.js";

export default db.define("produto", {
  codigo: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
},{
  timestamps: false
});