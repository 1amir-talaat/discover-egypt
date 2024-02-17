import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const PlacesImg = sequelize.define("PlacesImg", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await PlacesImg.sync({ force: false });
    console.log("PlacesImg model synced with database");
  } catch (err) {
    console.error("Error syncing PlacesImg model with database:", err);
  }
})();

export default PlacesImg;
