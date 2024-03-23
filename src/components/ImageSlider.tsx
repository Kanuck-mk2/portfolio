import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageSliderProps {
  imageAssets: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageAssets }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageAssets.length);
  };

  return (
    <motion.img
      alt={`profile${currentImageIndex + 1}`}
      src={imageAssets[currentImageIndex]}
      className="rounded-full border-4 border-slate-200 shape2-border w-[400px] ml-5 cursor-pointer"
      onClick={handleImageClick}
    />
  );
};

export default ImageSlider;
