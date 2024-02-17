import express from "express";
// import { getAllUsers, Register, Login } from "../controllers/users.js";
import  PlaceController  from "../controllers/PlaceController.js";

const router = express.Router();

// Users Routes
// router.get("/users", getAllUsers);
// router.post("/users/register", Register);
// router.post("/users/login", Login);

router.post("/places/create", PlaceController.createPlace);

export default router;
