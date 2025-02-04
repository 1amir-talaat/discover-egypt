import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sql8761187", "sql8761187", "QZFEW97bIk", {
  host: "sql8.freesqldatabase.com",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

export default sequelize;
