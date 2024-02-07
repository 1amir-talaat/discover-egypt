import Wishlist from "../models/Wishlist.js";

const validateFields = (fields, requiredFields) => {
  for (const field of requiredFields) {
    if (!fields[field]) {
      return false;
    }
  }
  return true;
};

export const addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;

  if (!validateFields({ userId, productId }, ["userId", "productId"])) {
    return res.status(400).json({ error: "Missing required fields in the request body" });
  }

  try {
    let wishlistItem = await Wishlist.findOne({ where: { productId, userId } });

    if (wishlistItem) {
      return res.status(400).json({ error: "item aready in the wishlist" });
    }

    wishlistItem = await Wishlist.create({ userId, productId });
    res.status(201).json({ msg: "Product added to wishlist successfully", wishlistItem });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getWishlistItems = async (req, res) => {
  const { userId } = req.params;

  if (!validateFields({ userId }, ["userId"])) {
    return res.status(400).json({ error: "Missing required fields in the request parameters" });
  }

  try {
    const wishlistItems = await Wishlist.findAll({ where: { userId } });
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.error("Error fetching wishlist items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const removeFromWishlist = async (req, res) => {
  const { wishlistItemId } = req.params;
  const { userId } = req.body;

  if (!validateFields({ wishlistItemId, userId }, ["wishlistItemId", "userId"])) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const wishlistItem = await Wishlist.findOne({ where: { productId: wishlistItemId, userId } });

    if (!wishlistItem) {
      return res.status(404).json({ error: "Wishlist item not found" });
    }

    await wishlistItem.destroy();
    res.status(200).json({ msg: "Wishlist item removed successfully" });
  } catch (error) {
    console.error("Error removing wishlist item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
