import { ReviewCard } from "../components";
import { reviews } from "../constants";
import{motion} from "framer-motion";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
        <motion.div initial={{ opacity: 0 ,y:-200}}
  whileInView={{ opacity: 1,y:0}} transition={{ duration: 1}}>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      </motion.div>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;