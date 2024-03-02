import { hamburger } from "../assets/icons";
import { headerLogo,logo} from "../assets/images";
import { navLinks } from "../constants";
import{motion} from "framer-motion";
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <motion.div initial={{y:-50}} animate={{ y: 0 }}
    transition={{ duration: 1, ease: "linear" }} className='flex justify-between items-center max-container'>
        <a href='/'>
          <div className='flex gap-x-3 items-center'>
          <img
            src={logo}
            alt='logo'
            width={170}
            height={39}
            className='m-0 w-[70px] h-[49px] object-contain'
          />
          <p className='font-trattatello  leading-normal text-4xl text-coral-red'>Star Shoe</p>
          </div>
        </a>
        <ul className=' flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </motion.div>
    </header>
  );
};

export default Nav;