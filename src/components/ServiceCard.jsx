import{motion} from "framer-motion";


const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <motion.div initial={{ opacity: 0 ,x:-200}}
      whileInView={{ opacity: 1,x:0}} transition={{ duration: 1}} className='flex-1 hover:bg-orange sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
       
        <div className='w-11 h-11 flex justify-center items-center hover:text-white-400 bg-coral-red rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal hover:text-white-400 text-slate-gray'>
          {subtext}
        </p>
        
      </motion.div>
    );
  };
  
  export default ServiceCard;