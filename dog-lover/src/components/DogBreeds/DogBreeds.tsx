import { ChangeEvent, useCallback, useState } from 'react';
import useDogBreeds from '../../hooks/useDogBreeds';
import {
  BreedFilter,
  BreedImage,
  BreedLink,
  BreedNavControls,
  BreedShuffle,
  BreedsList,
  SubBreeds,
} from './';
import { nextItem, previousItem, randomItem } from '../../utils';
import { BigHeartIcon, SadFaceIcon } from '../../assets';

const DogBreeds = () => {
  const {
    isError,
    isLoading,
    allDogBreeds,
    allSubBreeds,
    filteredBreeds,
    filter,
    setFilter,
  } = useDogBreeds();

  const [activeBreed, setActiveBreed] = useState<string>('');

  const onSetFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value),
    [setFilter]
  );

  const getNextBreed = useCallback(
    (arr: string[], current: string) => setActiveBreed(nextItem(arr, current)),
    [setActiveBreed]
  );

  const getPreviousBreed = useCallback(
    (arr: string[], current: string) =>
      setActiveBreed(previousItem(arr, current)),
    [setActiveBreed]
  );

  const getRandomBreed = useCallback(
    (arr: string[]) => {
      setActiveBreed(randomItem(arr));
    },
    [setActiveBreed]
  );

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-101px)]">
        <SadFaceIcon />
        <p className="text-2xl font-bold text-amber-700/30">
          Error. Dogs not found!
        </p>
      </div>
    );
  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-101px)]">
        <BigHeartIcon />
        <p className="text-2xl font-bold text-amber-700/30 animate-pulse">
          Loading dogs...
        </p>
      </div>
    );
  return (
    <div className="flex flex-col-reverse md:flex-row w-full">
      <div className="flex flex-col justify-start h-[calc(50vh-35px)] md:h-[calc(100vh-101px)]">
        <BreedFilter {...{ filter, onSetFilter }} />
        <BreedsList {...{ filteredBreeds, activeBreed, setActiveBreed }} />
      </div>
      <div className="flex-1 h-[calc(50vh-38px)] md:h-[calc(100vh-101px)]">
        <div className="h-[15%] py-4 flex flex-col justify-between items-center">
          {!!activeBreed && (
            <BreedNavControls
              {...{
                allDogBreeds,
                activeBreed,
                getPreviousBreed,
                getNextBreed,
                getRandomBreed,
              }}
            />
          )}
          <h1 className="text-4xl font-extrabold tracking-wide capitalize text-center text-amber-700">
            {!!activeBreed ? activeBreed : 'No Dog Breed Selected'}
          </h1>
        </div>
        <div className="h-[55%] flex flex-col justify-center items-center space-y-4">
          {!!activeBreed ? (
            <BreedImage {...{ breed: activeBreed }} />
          ) : (
            <BreedShuffle {...{ allDogBreeds, getRandomBreed }} />
          )}
        </div>
        <div className="h-[30%] py-2 flex flex-col justify-start items-center space-y-2 md:py-4">
          {!!activeBreed ? (
            <>
              <BreedLink {...{ breed: activeBreed }} />
              <SubBreeds
                {...{
                  allDogBreeds,
                  subBreeds: allSubBreeds,
                  breed: activeBreed,
                }}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DogBreeds;
