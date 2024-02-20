import Review from "../models/Review.js";

const ReviewController = {
  createReview: async (req, res) => {
    const data = req.body;
    try {
      await Review.create({
        review_name: data.name,
        review: data.review,
        email: data.email,
        place_id: data.place_id,
      });
      res.status(200).send("review created successfully");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default ReviewController;
