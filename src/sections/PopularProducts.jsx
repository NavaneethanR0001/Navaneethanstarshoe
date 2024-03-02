import { products } from "../constants";
import { PopularProductCard } from "../components";
import{motion} from "framer-motion";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <motion.div initial={{ opacity: 0 ,x:-200}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 1}} className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 ,x:-300}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 2}} 
  className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
