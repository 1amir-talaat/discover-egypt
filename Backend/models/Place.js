import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import Review from "./Review.js";

const Place = sequelize.define("Place", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  city_ar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title_ar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc_ar: {
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
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Place.hasMany(Review, { foreignKey: "place_id" });

(async () => {
  try {
    await Place.sync({ force: false });
    console.log("Place model synced with database");
  } catch (err) {
    console.error("Error syncing Place model with database:", err);
  }
})();

export default Place;
