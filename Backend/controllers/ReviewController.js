import Review from "../models/Review.js";

const ReviewController = {
  createReview: async (req, res) => {
    const { review, user_id, place_id } = req.body;
    try {
      await Review.create({
        review,
        user_id,
        place_id,
      });
      res.status(200).send("Review created successfully");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default ReviewController;
