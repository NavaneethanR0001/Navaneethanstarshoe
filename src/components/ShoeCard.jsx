
import{motion} from "framer-motion";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
     
        <div className={`flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2 border-white
      cursor-pointer max-sm:flex-1  ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
       >
        <motion.div whileHover={{
    scale: 1.1,
   
      transition: { duration: 1 },
  }} >
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={100}
            className={`object-contain  h-40 w-28 flex justify-center items-center  ` }onClick={handleClick}
          />
          </motion.div>
        </div>
    
    );
  };
  
  export default ShoeCard;