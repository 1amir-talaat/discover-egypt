import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  review_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

(async () => {
  try {
    await Review.sync({ force: false });
    console.log("Review model synced with database");
  } catch (err) {
    console.error("Error syncing Review model with database:", err);
  }
})();

export default Review;
