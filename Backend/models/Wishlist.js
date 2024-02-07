import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const Wishlist = sequelize.define("Wishlist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  try {
    await Wishlist.sync({ force: false });
    console.log("Wishlist model synced with database");
  } catch (err) {
    console.error("Error syncing Wishlist model with database:", err);
  }
})();

export default Wishlist;
