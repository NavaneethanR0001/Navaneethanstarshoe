import { Button } from "../components";
import{motion} from "framer-motion";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
         <motion.div initial={{ opacity: 0 ,x:-200}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 1}}>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      </motion.div>
      <motion.div initial={{ opacity: 0 ,x:200}}
  whileInView={{ opacity: 1,x:0}} transition={{ duration: 1}}className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
        </motion.div>
    </section>
  );
};

export default Subscribe;