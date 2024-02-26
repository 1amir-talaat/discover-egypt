import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import User from "./User.js";
import Place from "./Place.js";

const WillingToArrive = sequelize.define("WillingToArrive", {
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
  placeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

WillingToArrive.belongsTo(User, { foreignKey: "userId" });
WillingToArrive.belongsTo(Place, { foreignKey: "placeId" });

(async () => {
  try {
    await WillingToArrive.sync({ force: false });
    console.log("WillingToArrive model synced with database");
  } catch (err) {
    console.error("Error syncing WillingToArrive model with database:", err);
  }
})();

// Export WillingToArrive model
export default WillingToArrive;