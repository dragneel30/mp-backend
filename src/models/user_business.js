import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserBusiness = sequelize.define("user_businesses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  business_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    //todo put defaultValues or no?
    type: DataTypes.ENUM("1", "2", "3"),
    allowNull: false,
    defaultValue: "2",
  },
});

export default UserBusiness;
