import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import useSWR from 'swr';

const useDogBreeds = (): {
  isError: boolean;
  isLoading: boolean;
  allDogBreeds: string[];
  allSubBreeds: string[][];
  filteredBreeds: string[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
} => {
  const { data, error } = useSWR('https://dog.ceo/api/breeds/list/all');
  const [filter, setFilter] = useState<string>('');

  const filteredBreeds = useMemo(() => {
    return (
      data &&
      data.message &&
      Object.keys(data?.message).filter((breed: string) =>
        breed.toLowerCase().includes(filter?.trim().toLowerCase())
      )
    );
  }, [data, filter]);

  return {
    isError: (data && data.status === 'error') || error,
    isLoading: !error && !data,
    allDogBreeds: data && data.message && Object.keys(data?.message),
    allSubBreeds: data && data.message && Object.values(data?.message),
    filteredBreeds,
    filter,
    setFilter,
  };
};

export default useDogBreeds;
