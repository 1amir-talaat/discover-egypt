import { Op } from "sequelize";
import Place from "../models/Place.js";
import Review from "../models/Review.js";
import PlacesImg from "../models/PlacesImg.js";

const PlaceController = {
  getAllPlaces: async (req, res) => {
    try {
      const places = await Place.findAll({
        include: [{ model: Review }, { model: PlacesImg }],
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
        include: [{ model: Review }, { model: PlacesImg }],
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
        include: [{ model: Review }, { model: PlacesImg }],
      });
      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  searchPlaces: async (req, res) => {
    const { keyword } = req.params;

    if (!keyword.trim()) {
      return res.status(400).json({ message: "No keyword provided for search" });
    }

    const lowerKeyword = keyword.toLowerCase();

    try {
      const places = await Place.findAll({
        where: {
          [Op.or]: [
            { city_ar: { [Op.like]: `%${lowerKeyword}%` } },
            { city_en: { [Op.like]: `%${lowerKeyword}%` } },
            { title_ar: { [Op.like]: `%${lowerKeyword}%` } },
            { title_en: { [Op.like]: `%${lowerKeyword}%` } },
            { desc_ar: { [Op.like]: `%${lowerKeyword}%` } },
            { desc_en: { [Op.like]: `%${lowerKeyword}%` } },
            { min_price: { [Op.like]: `%${lowerKeyword}%` } },
            { max_price: { [Op.like]: `%${lowerKeyword}%` } },
            { place_name: { [Op.like]: `%${lowerKeyword}%` } },
            { category: { [Op.like]: `%${lowerKeyword}%` } },
            { sub_category: { [Op.like]: `%${lowerKeyword}%` } },
            { location_url: { [Op.like]: `%${lowerKeyword}%` } },
          ],
        },
        include: [{ model: Review }, { model: PlacesImg }],
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
      reviews: place.Reviews,
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
      reviews: place.Reviews,
      images: place.PlacesImgs,
    };

    data.en.push(transformedPlaceEn);
  });

  return data;
}

export default PlaceController;
