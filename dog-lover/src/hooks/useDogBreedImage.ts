import useSWR from 'swr';

const useDogBreedImage = (
  breed: string
): {
  image: string;
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error } = useSWR(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );

  return {
    image: data && data.message,
    isError: (data && data.status === 'error') || error,
    isLoading: !data && !error,
  };
};

export default useDogBreedImage;
