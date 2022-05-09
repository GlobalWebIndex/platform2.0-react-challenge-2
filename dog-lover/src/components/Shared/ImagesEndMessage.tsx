import { Link } from 'react-router-dom';

const ImagesEndMessage = ({
  breed,
  subBreed,
}: {
  breed?: string;
  subBreed?: string;
}) => {
  if (!(breed || subBreed))
    return (
      <div className="max-w-sm md:max-w-lg mx-auto py-8 text-center leading-loose text-sm font-semibold text-amber-700">
        <p className="text-xl font-extrabold">Wait! There's more!</p>
        <p>
          What if we told you we've got thousands more of awesome dog images...
        </p>
        <p>...and you get to pick your favorite breed?!</p>
        <Link
          to="/breeds"
          className="font-bold text-base border-b-2 border-amber-700 hover:border-transparent transition-colors"
        >
          Check them out now!
        </Link>
      </div>
    );
  return (
    <div className="max-w-sm md:max-w-lg mx-auto py-8 text-center leading-loose text-sm font-semibold text-amber-700">
      <p className="text-xl font-extrabold">Ah!</p>
      <p>
        It seems like we ran out of{' '}
        <span className="capitalize">
          {subBreed} {breed}
        </span>{' '}
        images to show you.
      </p>
      <p>Good news is we've got more awesome breeds!</p>
      <Link
        to="/breeds"
        className="text-base font-bold border-b-2 border-amber-700 hover:border-transparent transition-colors"
      >
        How about you check them out?!
      </Link>
    </div>
  );
};

export default ImagesEndMessage;
