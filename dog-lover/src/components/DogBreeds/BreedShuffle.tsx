import { BigShuffleIcon } from '../../assets';

const BreedShuffle = ({
  allDogBreeds,
  getRandomBreed,
}: {
  allDogBreeds: string[];
  getRandomBreed: (arr: string[]) => void;
}) => {
  return (
    <>
      <p className="short:hidden font-bold text-lg text-center text-amber-700 max-w-xs">
        Pick one from the list or click the button below to shuffle!
      </p>
      <button
        onClick={() => getRandomBreed(allDogBreeds)}
        aria-label="Random Breed"
        className="group p-10 rounded-full bg-amber-700/5 text-amber-700 transition-colors hocus:bg-amber-700 hocus:text-amber-50"
      >
        <BigShuffleIcon />
      </button>
    </>
  );
};

export default BreedShuffle;
