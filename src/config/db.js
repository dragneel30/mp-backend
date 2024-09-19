import { Sequelize } from "sequelize";

const sequelize = new Sequelize("marketplace", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    decimalNumbers: true,
  },
});

export default sequelize;
