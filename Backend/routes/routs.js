import express from "express";
import { getAllUsers, Register, Login } from "../controllers/users.js";
import { getAllProducts, createProduct, getProductDetails } from "../controllers/products.js";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cart.js";
import { addToWishlist, getWishlistItems, removeFromWishlist } from "../controllers/wishlist.js"; // Add this line
import { authenticateMiddleware } from "../middleware/authenticateMiddleware.js";

const router = express.Router();

// Users Routes
router.get("/users", authenticateMiddleware, getAllUsers);
router.post("/users/register", Register);
router.post("/users/login", Login);

// Products Routes
router.get("/products", getAllProducts);
router.get("/products/:productId", getProductDetails);
router.post("/products", createProduct);

// Cart Routes
router.post("/cart/add", addToCart);
router.get("/cart/itemse", getCartItems);
router.delete("/cart/remove/:cartItemId", removeFromCart);

// Wishlist Routes
router.post("/wishlist/add", addToWishlist);
router.get("/wishlist/items/:userId", getWishlistItems);
router.delete("/wishlist/remove/:wishlistItemId", removeFromWishlist);

export default router;
