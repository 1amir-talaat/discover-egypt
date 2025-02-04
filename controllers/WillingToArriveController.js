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
      // Retrieve items from the database including associated places
      const items = await WillingToArrive.findAll({
        where: { userId },
        include: Place,
      });

      // Transform the data to match the desired structure for both Arabic and English
      const transformedItems = {
        ar: items.map((item) => ({
          id: item.id,
          userId: item.userId,
          place: {
            id: item.Place.id,
            city: item.Place.city_ar,
            title: item.Place.title_ar,
            desc: item.Place.desc_ar,
            min_price: item.Place.min_price,
            max_price: item.Place.max_price,
            place_name: item.Place.place_name,
            category: item.Place.category,
            sub_category: item.Place.sub_category,
            location_url: item.Place.location_url,
            created_at: item.Place.created_at,
            updated_on: item.Place.updated_on,
            image: item.Place.image,
          },
        })),
        en: items.map((item) => ({
          id: item.id,
          userId: item.userId,
          place: {
            id: item.Place.id,
            city: item.Place.city_en,
            title: item.Place.title_en,
            desc: item.Place.desc_en,
            min_price: item.Place.min_price,
            max_price: item.Place.max_price,
            place_name: item.Place.place_name,
            category: item.Place.category,
            sub_category: item.Place.sub_category,
            location_url: item.Place.location_url,
            created_at: item.Place.created_at,
            updated_on: item.Place.updated_on,
            image: item.Place.image,
          },
        })),
      };

      // Return the transformed data
      res.status(200).json(transformedItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default WillingToArriveController;
