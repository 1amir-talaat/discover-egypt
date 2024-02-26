import { User, WillingToArrive } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({ attributes: { exclude: ["password"] } });
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  register: async (req, res) => {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.status(401).json({ error: "Missing input fields" });
    }

    try {
      const [newUser, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name,
          email,
          password: await bcrypt.hash(password, 10),
        },
      });

      if (!created) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

      res.status(200).json({
        token,
        msg: "Registration Successful",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(401).json({ error: "Missing input fields" });
    }

    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      const matchedPassword = await bcrypt.compare(password, user.password);

      if (!matchedPassword) {
        return res.status(401).json({ error: "Login Failed" });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

      res.status(200).json({
        token,
        msg: "Login Successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Error during Login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default UserController;
