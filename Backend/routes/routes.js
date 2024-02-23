import express from "express";
import ReviewController from "../controllers/ReviewController.js";
import PlaceController from "../controllers/PlaceController.js";
import UserController from "../controllers/UserController.js";
import authenticateMiddleware from "../middleware/authenticateMiddleware.js";

const router = express.Router();

// Review routes
router.post("/review", ReviewController.createReview);

// Places routes
router.get("/places", PlaceController.getAllPlaces);
router.get("/city/:city", PlaceController.getPlacesByCity);
router.get("/category/:category", PlaceController.getPlacesByCategory);
router.get("/search/:keyword", PlaceController.searchPlaces);
router.get("/palces/:id",PlaceController.getPlaceById)
router.get("/price",PlaceController.getByPriceRange)
// User routes
router.get("/users", authenticateMiddleware, UserController.getAllUsers);
router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);

export default router;
