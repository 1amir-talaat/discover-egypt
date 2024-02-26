import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import User from "./User.js";
import Place from "./Place.js";

// Define the Review model
const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Review.belongsTo(User, { foreignKey: "user_id" });

(async () => {
  try {
    await Review.sync({ force: false });
    console.log("Review model synced with database");
  } catch (err) {
    console.error("Error syncing Review model with database:", err);
  }
})();

// Export the Review model
export default Review;
