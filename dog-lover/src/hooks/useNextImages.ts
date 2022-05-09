import { useCallback, useEffect, useState } from 'react';

const useNextImages = (images: string[]) => {
  const [nextImages, setNextImages] = useState<string[]>([]);

  useEffect(() => {
    if (images && images.length) {
      setNextImages(images?.slice(0, 12));
    }
  }, [images]);

  const handleNextImages = useCallback(() => {
    setNextImages((nextImages) => [
      ...nextImages,
      ...images.slice(nextImages.length, nextImages.length + 12),
    ]);
  }, [setNextImages, images]);

  return {
    nextImages,
    handleNextImages,
  };
};

export default useNextImages;
