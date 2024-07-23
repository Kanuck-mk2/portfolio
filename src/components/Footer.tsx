import { motion } from 'framer-motion';
import { footer} from '../constants/animations';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="gradient-bg backdrop-filter backdrop-blur-lg text-white py-4  flex flex-row justify-center "
    
    >
      <motion.p className="ml-10" {...footer}>
        &copy; {currentYear}{' '}
        <span className="font-bold font-nunito">Chad Parenteau</span> - Web
        Developer
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
