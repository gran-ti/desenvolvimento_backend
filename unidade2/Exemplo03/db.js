import { Sequelize } from "sequelize";

const sequelize = new Sequelize("loja_node", "root", "Rec0de@Pro", {
  dialect: "mysql", 
  host: "127.0.0.1",
  logging: false 
});

export default sequelize;