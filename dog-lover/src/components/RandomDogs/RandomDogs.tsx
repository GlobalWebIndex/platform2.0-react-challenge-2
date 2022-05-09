import useRandomDogs from '../../hooks/useRandomDogs';
import { ImageGridSkeleton, ImagesEndMessage } from '../Shared';
import { SadFaceIcon } from '../../assets';

const RandomDogs = () => {
  const { randomDogs, isError, isLoading } = useRandomDogs();

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-101px)]">
        <SadFaceIcon />
        <p className="text-2xl font-bold text-amber-700/30">
          Error. Dogs not found!
        </p>
      </div>
    );
  if (isLoading) return <ImageGridSkeleton count={12} />;
  return (
    <>
      <ul
        aria-label="Random Dogs"
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {randomDogs?.map((randomDog: string, index) => {
          return (
            <li key={randomDog + index}>
              <img
                src={randomDog}
                alt="Random dog"
                loading="lazy"
                className="object-cover rounded w-full h-[40vh] border-2 border-amber-700"
              />
            </li>
          );
        })}
      </ul>
      <ImagesEndMessage />
    </>
  );
};

export default RandomDogs;
