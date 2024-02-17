import Review from "../models/Review.js";

const ReviewController = {
  CreateReview: async(req,res)=>{
    const data =req.body
    try {
      await Review.create(
        {
          
        }
      )
    } catch (error) {
      
    }
  }
};

export default ReviewController;
