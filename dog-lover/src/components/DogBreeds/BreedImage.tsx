import { BigHeartIcon, SadFaceIcon } from '../../assets';
import useDogBreedImage from '../../hooks/useDogBreedImage';

const BreedImage = ({ breed }: { breed: string }) => {
  const { image, isError, isLoading } = useDogBreedImage(breed);

  if (isError)
    return (
      <div className="short:hidden flex flex-col justify-center items-center h-[90%] max-h-[90%] aspect-square bg-amber-50 border-2 border-amber-700">
        <SadFaceIcon />
        <p className="text-xl font-bold text-amber-700/30">
          Error loading image.
        </p>
      </div>
    );
  if (isLoading)
    return (
      <div className="short:hidden flex justify-center items-center h-[90%] max-h-[90%] aspect-square bg-amber-50 border-2 border-amber-700">
        <BigHeartIcon />
      </div>
    );
  return (
    <img
      src={image}
      alt={`An awesome ${breed} dog`}
      loading="lazy"
      className="short:hidden object-cover aspect-square h-[90%] max-h-[90%] rounded border-2 border-amber-700"
    />
  );
};

export default BreedImage;
