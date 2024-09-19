import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Verification = sequelize.define("verifications", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  code: {
    type: DataTypes.STRING,
  },
});

export default Verification;
