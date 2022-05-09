import useSWR from 'swr';

const useRandomDogs = (): {
  randomDogs: string[];
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random/12');

  return {
    randomDogs: data && data.message,
    isError: (data && data.status === 'error') || error,
    isLoading: !data && !error,
  };
};

export default useRandomDogs;
