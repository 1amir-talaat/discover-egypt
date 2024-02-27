import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import PropTypes from "prop-types";
const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return action.payload;
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.productId !== action.payload);
    default:
      return state;
  }
};

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await api.get(`/wishlist/items/${user.id}`);
        dispatchWishlist({ type: "SET_WISHLIST", payload: response.data });
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    if (user) {
      fetchWishlistItems();
    }
  }, [user]);

  const addToWishlist = async (productId, loader) => {
    try {
      loader(true);
      const response = await api.post("/wishlist/add", {
        userId: user.id,
        productId,
      });
      dispatchWishlist({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlistItem,
      });
      loader(false);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      throw error;
    }
  };

  const removeFromWishlist = async (productId, loader) => {
    try {
      loader(true);
      await api.delete(`/wishlist/remove/${productId}`, {
        data: { userId: user.id },
      });
      dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: productId });
      loader(false);
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      throw error;
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export { WishlistProvider, useWishlist };
