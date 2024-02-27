import { WillingToArrive, User, Place } from "../models/index.js";

const WillingToArriveController = {
  // Add a new item to the "Willing to Arrive" list
  addToWillingToArrive: async (req, res) => {
    const { userId, placeId } = req.body;
    try {
      // Check if the user and place exist
      const user = await User.findByPk(userId);
      const place = await Place.findByPk(placeId);

      if (!user || !place) {
        return res.status(404).json({ message: "User or place not found" });
      }

      // Create a new entry in the "WillingToArrive" table
      const willingToArrive = await WillingToArrive.create({
        userId,
        placeId,
      });

      res.status(201).json({ message: "Added to Willing to Arrive list", willingToArrive });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Remove an item from the "Willing to Arrive" list
  removeFromWillingToArrive: async (req, res) => {
    const { userId, placeId } = req.body;
    try {
      // Check if the entry exists
      const willingToArrive = await WillingToArrive.findOne({
        where: {
          userId,
          placeId,
        },
      });

      if (!willingToArrive) {
        return res.status(404).json({ message: "Item not found in Willing to Arrive list" });
      }

      // Delete the entry
      await willingToArrive.destroy();

      res.status(200).json({ message: "Removed from Willing to Arrive list" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all items in the "Willing to Arrive" list for a specific user
  getWillingToArriveByUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const items = await WillingToArrive.findAll({
        where: { userId },
        include: Place,
      });

      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default WillingToArriveController;
