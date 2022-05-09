export const HeartIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Heart"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

export const BigHeartIcon = () => {
  return (
    <svg
      data-testid="big-heart"
      role="img"
      aria-label="Big Heart"
      className="h-64 w-64 text-amber-700/10 animate-pulse"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

export const BigShuffleIcon = () => {
  return (
    <svg
      data-testid="big-shuffle"
      role="img"
      aria-label="Big Shuffle"
      className="h-16 w-16 group-hover:rotate-180 transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
};

export const ShuffleIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Shuffle"
      className="h-4 w-4 mx-auto"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
};

export const PreviousIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Previous"
      className="h-4 w-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
};

export const NextIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Next"
      className="h-4 w-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

export const ArrowRightIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Arrow Right"
      className="h-6 w-6 mt-1 group-hover:translate-x-1 transition-transform duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        className="scale-x-0 opacity-0 origin-right group-hover:scale-x-100 group-hover:opacity-100 [transition:transform_300ms_ease,opacity_200ms_ease]"
        x1="5"
        y1="12"
        x2="17"
        y2="12"
      />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

export const FilterIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Filter"
      className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const SadFaceIcon = () => {
  return (
    <svg
      role="img"
      aria-label="Sad Face"
      className="h-64 w-64 text-amber-700/10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
