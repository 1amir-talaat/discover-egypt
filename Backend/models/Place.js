import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

import Review from "./Review.js";
import PlacesImg from "./PlacesImg.js";

const Place = sequelize.define("Place", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  min_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place_name: {
    // this  specified place and the city is the general place example: "dahab, abo-galom",
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_on: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Place.hasMany(Review, { foreignKey: "place_id" });
Place.hasMany(PlacesImg, { foreignKey: "place_id" });

(async () => {
  try {
    await Place.sync({ force: false });
    console.log("Place model synced with database");
  } catch (err) {
    console.error("Error syncing Place model with database:", err);
  }
})();

export default Place;
