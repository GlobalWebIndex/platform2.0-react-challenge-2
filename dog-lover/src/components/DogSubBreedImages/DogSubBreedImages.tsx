import InfiniteScroll from 'react-infinite-scroll-component';
import useBreedLocation from '../../hooks/useBreedLocation';
import useDogSubBreedImages from '../../hooks/useDogSubBreedImages';
import useNextImages from '../../hooks/useNextImages';
import { ImageGridSkeleton, ImagesEndMessage } from '../Shared';
import { SadFaceIcon } from '../../assets';

const DogSubBreedImages = () => {
  const { breed, subBreed } = useBreedLocation();
  const { subBreedImages, isError, isLoading } = useDogSubBreedImages(
    breed,
    subBreed
  );
  const { nextImages, handleNextImages } = useNextImages(subBreedImages);

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-101px)]">
        <SadFaceIcon />
        <p className="text-2xl font-bold text-amber-700/30">
          {subBreedImages || 'Error. Dogs not found!'}
        </p>
      </div>
    );
  if (isLoading) return <ImageGridSkeleton count={12} />;
  return (
    <InfiniteScroll
      dataLength={nextImages.length}
      next={handleNextImages}
      hasMore={nextImages.length < subBreedImages.length ? true : false}
      loader={null}
      scrollThreshold="50px"
      endMessage={<ImagesEndMessage breed={breed} subBreed={subBreed} />}
    >
      <ul
        aria-label={`${subBreed} ${breed} images`}
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {nextImages.map((image) => {
          return (
            <li key={image}>
              <img
                src={image}
                alt={`An awesome ${subBreed} ${breed}`}
                loading="lazy"
                className="object-cover rounded w-full h-[40vh] border-2 border-amber-700"
              />
            </li>
          );
        })}
      </ul>
    </InfiniteScroll>
  );
};

export default DogSubBreedImages;
