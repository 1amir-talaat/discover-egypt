import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "First name is required.",
      },
      notEmpty: {
        msg: "First name cannot be empty.",
      },
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Last name is required.",
      },
      notEmpty: {
        msg: "Last name cannot be empty.",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Email is required.",
      },
      notEmpty: {
        msg: "Email cannot be empty.",
      },
      isEmail: {
        msg: "Invalid email format.",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Password is required.",
      },
      notEmpty: {
        msg: "Password cannot be empty.",
      },
    },
  },
});

(async () => {
  try {
    await User.sync({ force: false });
    console.log("User model synced with database");
  } catch (err) {
    console.error("Error syncing User model with database:", err);
  }
})();

export default User;
