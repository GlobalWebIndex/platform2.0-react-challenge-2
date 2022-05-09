import { Link } from 'react-router-dom';

const SubBreeds = ({
  allDogBreeds,
  subBreeds,
  breed,
}: {
  allDogBreeds: string[];
  subBreeds: string[][];
  breed: string;
}) => {
  return subBreeds[allDogBreeds.indexOf(breed)] &&
    subBreeds[allDogBreeds.indexOf(breed)].length > 0 ? (
    <div className="h-[70%] flex flex-wrap justify-center items-start gap-4 mt-2 py-2 overflow-y-auto md:h-full md:w-2/3 md:py-4">
      {subBreeds[allDogBreeds.indexOf(breed)].map((subBreed) => (
        <Link
          to={`/breeds/${breed}/${subBreed}`}
          key={subBreed}
          className="px-4 py-1 rounded-full capitalize text-lg font-semibold border-2 border-amber-700 bg-amber-700 text-amber-50 transition-colors hocus:bg-amber-50 hocus:text-amber-700"
        >
          {subBreed}
        </Link>
      ))}
    </div>
  ) : (
    <span className="mt-2 py-2 text-xl font-semibold text-amber-700 md:py-4">
      No sub-breeds found.
    </span>
  );
};

export default SubBreeds;
