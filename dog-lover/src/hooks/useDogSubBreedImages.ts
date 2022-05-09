import useSWR from 'swr';

const useDogSubBreedImages = (
  breed: string,
  subBreed: string
): {
  subBreedImages: string[];
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error } = useSWR(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images`
  );

  return {
    subBreedImages: data && data.message,
    isError: (data && data.status === 'error') || error,
    isLoading: !error && !data,
  };
};

export default useDogSubBreedImages;
