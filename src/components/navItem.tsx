import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { navMenuItemAnimation } from '../constants/animations';

interface NavItemProps {
  label: string;
  index: number;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, index, onClick }) => (
  <motion.a
    key={index}
    href={`#${label.toLowerCase()}`}
    className="w-[75%] flex justify-center items-center rounded-full bg-slate-400/10 backdrop-filter backdrop-blur-lg text-sky-200 font-bold m-2 p-4 cursor-pointer glow-border border-2 border-slate-600"
    {...navMenuItemAnimation(index)}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.5 }}
    onClick={onClick}
  >
    {/* Render appropriate icon based on index */}
    {index === 0 && <AiOutlineHome size={20} />}
    {index === 1 && <BsPerson size={20} />}
    {index === 2 && <GrProjects size={20} />}
    {index === 3 && <AiOutlineProject size={20} />}
    {index === 4 && <AiOutlineMail size={20} />}
    {/* Example text */}
    <span className="pl-4">{label}</span>
  </motion.a>
);

export default NavItem;
