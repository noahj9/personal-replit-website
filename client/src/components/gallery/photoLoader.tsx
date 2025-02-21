import golf1 from '../../../../public/images/golf1.png';
import asulkan2024 from '../../../../public/images/asulkan2024.jpeg';
import medellin2024 from '../../../../public/images/medellin2024.jpeg';
import plitvice from '../../../../public/images/plitvice.jpg';
import woodbury from '../../../../public/images/woodbury.jpg';
import poland1 from '../../../../public/images/poland1.jpeg';
import santamarta2024 from '../../../../public/images/santamarta2024.jpeg';

export const imageMap = {
  'golf1.png': golf1,
  'asulkan2024.jpeg': asulkan2024,
  'medellin2024.jpeg': medellin2024,
  'plitvice.jpg': plitvice,
  'woodbury.jpg': woodbury,
  'poland1.jpeg': poland1,
  'santamarta2024.jpeg': santamarta2024,
  // Add more mappings as needed
};

// Create a type for the valid logo keys
type ImageKey = keyof typeof imageMap;

// Helper function to get the correct image source
export const getImgSrc = (imageUrl: string) => {
  // If it's an external URL, use it directly
  if (imageUrl?.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a local file, look it up in our map
  return imageMap[imageUrl as ImageKey] || '/placeholder.png';
};