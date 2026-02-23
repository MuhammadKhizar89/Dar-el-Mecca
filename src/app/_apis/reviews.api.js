import { dummyReviews } from "../_data/dummyData";

export const getReviewsAPI= async ()=>{
   try {
     // Replaced API call with dummy data
     return dummyReviews;
   } catch (error) {
        return error.response.data;
   }
} 