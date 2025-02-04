import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

export default sequelize;
