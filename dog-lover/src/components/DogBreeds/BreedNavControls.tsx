import { NextIcon, PreviousIcon, ShuffleIcon } from '../../assets';

const BreedNavControls = ({
  allDogBreeds,
  activeBreed,
  getPreviousBreed,
  getNextBreed,
  getRandomBreed,
}: {
  allDogBreeds: string[];
  activeBreed: string;
  getPreviousBreed: (arr: string[], current: string) => void;
  getNextBreed: (arr: string[], current: string) => void;
  getRandomBreed: (arr: string[]) => void;
}) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <button
        onClick={() => getPreviousBreed(allDogBreeds, activeBreed)}
        disabled={!allDogBreeds[allDogBreeds.indexOf(activeBreed) - 1]}
        aria-label="Previous Breed"
        className="w-1/3 rounded-l bg-amber-50 text-amber-700 border-y-2 border-l-2 border-amber-700 transition-colors hocus:bg-amber-700 hocus:text-amber-50 disabled:bg-amber-700/5 disabled:text-amber-700/70 disabled:border-amber-700/70 disabled:hover:bg-amber-700/5 disabled:hover:text-amber-700/70 md:px-16"
      >
        <PreviousIcon />
      </button>
      <button
        onClick={() => getRandomBreed(allDogBreeds)}
        aria-label="Random Breed"
        className="w-1/3 bg-amber-50 text-amber-700 border-2 border-amber-700 transition-colors hocus:bg-amber-700 hocus:text-amber-50 md:px-16"
      >
        <ShuffleIcon />
      </button>
      <button
        onClick={() => getNextBreed(allDogBreeds, activeBreed)}
        disabled={!allDogBreeds[allDogBreeds.indexOf(activeBreed) + 1]}
        aria-label="Next Breed"
        className="w-1/3 rounded-r bg-amber-50 text-amber-700 border-y-2 border-r-2 border-amber-700 transition-colors hocus:bg-amber-700 hocus:text-amber-50 disabled:bg-amber-700/5 disabled:text-amber-700/70 disabled:border-amber-700/70 disabled:hover:bg-amber-700/5 disabled:hover:text-amber-700/70 md:px-16"
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default BreedNavControls;
