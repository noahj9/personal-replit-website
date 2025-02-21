// logoLoader.js
import awsLogo from '../../../../public/logos/aws.svg';
import rcpLogo from '../../../../public/logos/logo.png';
// Add more logo imports as needed

// Create a mapping object of filename -> imported image
export const logoMap = {
  'aws.svg': awsLogo,
  'logo.png': rcpLogo,
  // Add more mappings as needed
};

// Create a type for the valid logo keys
type LogoKey = keyof typeof logoMap;

// Helper function to get the correct image source
export const getLogoSrc = (imageUrl: string) => {
  // If it's an external URL, use it directly
  if (imageUrl?.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a local file, look it up in our map
  return logoMap[imageUrl as LogoKey] || '/placeholder.png';
};