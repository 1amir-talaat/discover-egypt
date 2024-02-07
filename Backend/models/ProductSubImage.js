import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const ProductSubImage = sequelize.define("ProductSubImage", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  try {
    await ProductSubImage.sync({ force: false });
    console.log("ProductSubImage model synced with database");
  } catch (err) {
    console.error("Error syncing ProductSubImage model with database:", err);
  }
})();

export default ProductSubImage;
