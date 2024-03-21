import { motion } from 'framer-motion';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-4 border-l-2 border-r-2 border-b-2 flex flex-row justify-center ">
      <motion.p
      className='ml-10'
        initial={{ opacity: 0, x: 0, y: -500 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 3, type: 'spring' }}
      >
        &copy; {currentYear}{' '}
        <span className="font-bold font-nunito">Chad Parenteau</span>- Web
        Developer
      </motion.p>
    </footer>
  );
};

export default Footer;
