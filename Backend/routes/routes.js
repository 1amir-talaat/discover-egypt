import express from "express";
import PlaceController from "../controllers/PlaceController.js";
import ReviewController from "../controllers/ReviewController.js";
import UserController from "../controllers/UserController.js";
import WillingToArriveController from "../controllers/WillingToArriveController.js";
import authenticateMiddleware from "../middleware/authenticateMiddleware.js";

const router = express.Router();

// Review routes
router.post("/review", ReviewController.createReview);

// Places routes
router.get("/places", PlaceController.getAllPlaces);
router.post("/places", PlaceController.addPlace);
router.get("/city/:city", PlaceController.getPlacesByCity);
router.get("/category/:category", PlaceController.getPlacesByCategory);
router.post("/search/", PlaceController.searchPlaces);
router.get("/palces/:id", PlaceController.getPlaceById);
router.get("/price", PlaceController.getByPriceRange);

// User routes
router.get("/users", authenticateMiddleware, UserController.getAllUsers);
router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);

// Willing to Arrive routes
router.post("/willing-to-arrive", WillingToArriveController.addToWillingToArrive);
router.delete("/willing-to-arrive", WillingToArriveController.removeFromWillingToArrive);
router.get("/willing-to-arrive/:userId", WillingToArriveController.getWillingToArriveByUser);

export default router;