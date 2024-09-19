import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Business = sequelize.define("businesses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  current_resellers_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_resellers_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
  },
});

export default Business;
