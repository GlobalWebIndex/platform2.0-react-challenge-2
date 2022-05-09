import useSWR from 'swr';

const useDogBreedImages = (
  breed: string
): {
  breedImages: string[];
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error } = useSWR(`https://dog.ceo/api/breed/${breed}/images`);

  return {
    breedImages: data && data.message,
    isError: (data && data.status === 'error') || error,
    isLoading: !error && !data,
  };
};

export default useDogBreedImages;
