import Place from "../models/Place.js";
import Review from "../models/Review.js";
import PlacesImg from "../models/PlacesImg.js";

const PlaceController = {
  // Controller functions for Place model CRUD operations
  createPlace: async (req, res) => {
    try {
      const place = await Place.create(req.body);
      res.status(201).json(place);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  // Other CRUD operations for Place model...

  // Controller function to get reviews for a place
  getPlaceReviews: async (req, res) => {
    try {
      const { placeId } = req.params;
      const reviews = await Review.findAll({ where: { place_id: placeId } });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Controller function to get images for a place
  getPlaceImages: async (req, res) => {
    try {
      const { placeId } = req.params;
      const images = await PlacesImg.findAll({ where: { place_id: placeId } });
      res.status(200).json(images);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default PlaceController;
