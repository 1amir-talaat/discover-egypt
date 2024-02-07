import Cart from "../models/Cart.js";
import Product from "../models/Products.js";

export const addToCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;

  try {
    let cartItem = await Cart.findOne({ where: { productId, userId } });

    if (cartItem) {
      await cartItem.update({ quantity: cartItem.quantity + quantity });
    } else {
      cartItem = await Cart.create({ productId, userId, quantity });
    }

    res.status(200).json({ msg: "Product added to cart successfully", cartItem });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "title", "description", "price", "stock", "mainImage", "brand", "rating"],
        },
      ],
    });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const removeFromCart = async (req, res) => {
  const { cartItemId } = req.params;
  const { userId } = req.body;

  try {
    const cartItem = await Cart.findOne({ where: { id: cartItemId, userId } });

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await cartItem.destroy();
    res.status(200).json({ msg: "Cart item removed successfully" });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
