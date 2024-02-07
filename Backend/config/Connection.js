import { Sequelize } from "sequelize";

const sequelize = new Sequelize("freedb_it-project", "freedb_1amir", "9@2Kv%SdE?W2aCU", {
  host: "sql.freedb.tech",
  dialect: "mysql",
  logging: false,
  port: 3306,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
