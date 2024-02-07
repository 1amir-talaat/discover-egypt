import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!(first_name && last_name && email && password)) {
    return res.status(401).json({ error: "Missing input fields" });
  }

  try {
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        first_name,
        last_name,
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
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
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
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during Login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
