import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import Product from "./Products.js"; 

const Cart = sequelize.define("Cart", {
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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

Cart.belongsTo(Product, { foreignKey: "productId" });

(async () => {
  try {
    await Cart.sync({ force: false });
    console.log("Cart model synced with database");
  } catch (err) {
    console.error("Error syncing Cart model with database:", err);
  }
})();

export default Cart;
