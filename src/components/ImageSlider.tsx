import { useState } from 'react';

interface ImageSliderProps {
  imageAssets: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageAssets }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageAssets.length);
  };

  return (
    <img
      alt={`profile${currentImageIndex + 1}`}
      src={imageAssets[currentImageIndex]}
      className="w-full rounded-full border-4 border-slate-200 shape2-border cursor-pointer"
      onClick={handleImageClick}
    />
  );
};

export default ImageSlider;
