const ImageGridSkeleton = ({ count }: { count: number }) => {
  return (
    <div
      data-testid="image-grid-skeleton"
      className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {[...Array(count)].map((_value, index) => (
        <div
          key={index}
          className="rounded w-full h-[40vh] border-2 border-amber-700"
        >
          <div className="w-full h-full bg-amber-700/10 animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default ImageGridSkeleton;
