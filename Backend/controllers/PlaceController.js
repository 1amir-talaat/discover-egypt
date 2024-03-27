import { Op } from "sequelize";
import { Place, Review, User } from "../models/index.js";

const PlaceController = {
  getAllPlaces: async (req, res) => {
    try {
      const places = await Place.findAll({
        include: [
          {
            model: Review,
            include: [
              {
                model: User,
                attributes: ["name", "email"],
              },
            ],
          },
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
      const place = await Place.findByPk(id, {
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
        ],
      });
      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }
      const data = transformPlacesData([place]);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  searchPlaces: async (req, res) => {
    const { keyword } = req.body;
    try {
      if (!keyword) {
        return res.status(400).json({ error: "Keyword is required for search" });
      }

      let places;
      let numericValue = parseFloat(keyword);

      if (!isNaN(numericValue)) {
        places = await Place.findAll({
          where: {
            [Op.and]: [{ min_price: { [Op.lte]: numericValue } }, { max_price: { [Op.gte]: numericValue } }],
          },
          include: [
            {
              model: Review,
              include: [{ model: User, attributes: ["name", "email"] }],
            },
          ],
        });
      } else {
        const terms = keyword.split(" ");
        places = await Place.findAll({
          where: {
            [Op.or]: terms.map((term) => ({
              [Op.or]: [
                { title_ar: { [Op.like]: `%${term.toLowerCase()}%` } },
                { title_en: { [Op.like]: `%${term.toLowerCase()}%` } },
                { desc_ar: { [Op.like]: `%${term.toLowerCase()}%` } },
                { desc_en: { [Op.like]: `%${term.toLowerCase()}%` } },
                { place_name: { [Op.like]: `%${term.toLowerCase()}%` } },
                { category: { [Op.like]: `%${term.toLowerCase()}%` } },
              ],
            })),
          },
          include: [
            {
              model: Review,
              include: [{ model: User, attributes: ["name", "email"] }],
            },
          ],
        });
      }

      numericValue = parseFloat(keyword.match(/\d+/));

      let filteredPlaces;
      if (numericValue) {
        filteredPlaces = places.filter((place) => {
          return place.min_price <= numericValue && place.max_price >= numericValue;
        });
      } else {
        filteredPlaces = places;
      }

      const data = transformPlacesData(filteredPlaces);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getByPriceRange: async (req, res) => {
    const { min_price, max_price } = req.body;
    try {
      const places = await Place.findAll({
        where: {
          [Op.and]: [{ min_price: { [Op.gte]: min_price } }, { max_price: { [Op.lte]: max_price } }],
        },
        include: [
          {
            model: Review,
            include: [{ model: User, attributes: ["name", "email"] }],
          },
        ],
      });
      const data = transformPlacesData(places);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  addPlace: async (req, res) => {
    const { city_ar, city_en, title_ar, title_en, desc_ar, desc_en, min_price, max_price, place_name, category, sub_category, location_url, image } =
      req.body;

    try {
      const newPlace = await Place.create({
        city_ar,
        city_en,
        title_ar,
        title_en,
        desc_ar,
        desc_en,
        min_price,
        max_price,
        place_name,
        category,
        sub_category,
        location_url,
        image,
      });

      res.status(201).json({ message: "Place added successfully", place: newPlace });
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
      image: place.image,
    };

    data.ar.push(transformedPlace);

    const transformedPlaceEn = { ...transformedPlace, city: place.city_en, title: place.title_en, desc: place.desc_en };

    data.en.push(transformedPlaceEn);
  });

  return data;
}

export default PlaceController;
