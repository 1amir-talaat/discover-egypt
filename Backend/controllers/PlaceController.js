import { Op } from "sequelize";
import Place from "../models/Place.js";
import Review from "../models/Review.js";
import PlacesImg from "../models/PlacesImg.js";
import User from "../models/User.js";

const PlaceController = {
  getAllPlaces: async (req, res) => {
    try {
      const places = await Place.findAll({
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
          { model: PlacesImg },
        ],
      });

      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getPlacesByCity: async (req, res) => {
    const { city } = req.params;
    try {
      const places = await Place.findAll({
        where: {
          [Op.or]: [{ city_ar: city }, { city_en: city }],
        },
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
          { model: PlacesImg },
        ],
      });

      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getPlacesByCategory: async (req, res) => {
    const { category } = req.params;
    try {
      const places = await Place.findAll({
        where: {
          category: category,
        },
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
          { model: PlacesImg },
        ],
      });
      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getPlaceById: async (req, res) => {
    const id = req.params.id;
    try {
      const place = await Place.findAll({
        where: {
          id: id,
        },
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
          { model: PlacesImg },
        ],
      });
      const data = transformPlacesData(place);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  searchPlaces: async (req, res) => {
    const { keyword } = req.body;

    console.log(keyword);

    if (!keyword.trim()) {
      return res.status(400).json({ message: "No keyword provided for search" });
    }

    const lowerKeyword = keyword.toLowerCase();

    const keywords = lowerKeyword.split(" ");

    try {
      const places = await Place.findAll({
        where: {
          [Op.and]: keywords.map((keyword) => ({
            [Op.or]: [
              { city_ar: { [Op.like]: `%${keyword}%` } },
              { city_en: { [Op.like]: `%${keyword}%` } },
              { title_ar: { [Op.like]: `%${keyword}%` } },
              { title_en: { [Op.like]: `%${keyword}%` } },
              { desc_ar: { [Op.like]: `%${keyword}%` } },
              { desc_en: { [Op.like]: `%${keyword}%` } },
              { place_name: { [Op.like]: `%${keyword}%` } },
              { category: { [Op.like]: `%${keyword}%` } },
              { sub_category: { [Op.like]: `%${keyword}%` } },
              { location_url: { [Op.like]: `%${keyword}%` } },
              {
                [Op.and]: [{ min_price: { [Op.lte]: keyword } }, { max_price: { [Op.gte]: keyword } }],
              },
            ],
          })),
        },
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
          { model: PlacesImg },
        ],
      });

      if (places.length === 0) {
        return res.status(404).json({ message: "No places found for the specified keyword" });
      }

      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getByPriceRange: async (req, res) => {
    const minPrice = parseFloat(req.body.min_price) || 0;
    const maxPrice = parseFloat(req.body.max_price) || Infinity;
    try {
      const places = await Place.findAll({
        where: {
          [Op.and]: [{ min_price: { [Op.gte]: minPrice, [Op.lte]: maxPrice } }, { max_price: { [Op.lte]: maxPrice, [Op.gte]: minPrice } }],
        },
      });
      res.json(places);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

function transformPlacesData(places) {
  const data = {
    ar: [],
    en: [],
  };

  places.forEach((place) => {
    const transformedPlace = {
      id: place.id,
      city: place.city_ar,
      title: place.title_ar,
      desc: place.desc_ar,
      min_price: place.min_price,
      max_price: place.max_price,
      place_name: place.place_name,
      category: place.category,
      sub_category: place.sub_category,
      location_url: place.location_url,
      created_at: place.created_at,
      updated_on: place.updated_on,
      reviews: place.Reviews.map((review) => ({
        id: review.id,
        review: review.review,
        user: review.User
          ? {
              name: review.User.name,
              email: review.User.email,
            }
          : null,
      })),
      images: place.PlacesImgs,
    };

    data.ar.push(transformedPlace);

    const transformedPlaceEn = {
      id: place.id,
      city: place.city_en,
      title: place.title_en,
      desc: place.desc_en,
      min_price: place.min_price,
      max_price: place.max_price,
      place_name: place.place_name,
      category: place.category,
      sub_category: place.sub_category,
      location_url: place.location_url,
      created_at: place.created_at,
      updated_on: place.updated_on,
      reviews: place.Reviews.map((review) => ({
        id: review.id,
        review: review.review,
        user: review.User
          ? {
              name: review.User.name,
              email: review.User.email,
            }
          : null,
      })),
      images: place.PlacesImgs,
    };

    data.en.push(transformedPlaceEn);
  });

  return data;
}

export default PlaceController;
