import { useLocation } from 'react-router-dom';

const useBreedLocation = () => {
  const location = useLocation();

  return {
    current: location.pathname,
    breed: location.pathname.split('/')[2],
    subBreed: location.pathname.split('/')[3],
  };
};

export default useBreedLocation;
