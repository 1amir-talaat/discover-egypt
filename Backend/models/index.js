import sequelize from "../config/Connection.js";
import User from "./User.js";
import Place from "./Place.js";
import Review from "./Review.js";
import WillingToArrive from "./WillingToArrive.js";

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await User.sync({ alter: true }); 
    await Place.sync({ alter: true }); 
    await Review.sync({ alter: true }); 
    await WillingToArrive.sync({ alter: true }); 

    console.log("All models synchronized.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

syncDatabase();

export { Place, Review, User, WillingToArrive };
