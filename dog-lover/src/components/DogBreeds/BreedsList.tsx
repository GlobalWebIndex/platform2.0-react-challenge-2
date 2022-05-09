import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

const BreedsList = ({
  filteredBreeds,
  activeBreed,
  setActiveBreed,
}: {
  filteredBreeds: string[];
  activeBreed: string;
  setActiveBreed: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ul
      aria-label="Dog Breeds"
      className="h-full p-2 space-y-2 overflow-y-scroll"
    >
      {filteredBreeds?.map((breed: string) => (
        <li key={breed}>
          <button
            onClick={() => setActiveBreed(breed)}
            className={clsx(
              breed === activeBreed
                ? 'bg-amber-700 text-amber-50'
                : 'bg-amber-700/5 text-amber-700 ',
              'inline-block w-full p-3 cursor-pointer rounded capitalize text-xl font-semibold border-2 border-amber-700 transition-colors duration-100 hocus:bg-amber-700 hocus:text-amber-50'
            )}
          >
            {breed}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BreedsList;
