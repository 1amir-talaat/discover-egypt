import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
  port: process.env.DB_PORT,
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

export default sequelize;
